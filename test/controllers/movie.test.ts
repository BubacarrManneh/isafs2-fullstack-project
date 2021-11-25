
import request, {Response} from 'supertest'
import dbConnect,{MongodHelper} from './../db-helper'
import app from '../../src/app'

describe('product controller', () => {
    let dbHelper: MongodHelper
    let createdMovieResponse: Response

    beforeAll(async () => {
        dbHelper = await dbConnect()
    })
   
    afterAll(async () => {
        await dbHelper.closeDatabase()
    })

    beforeEach(async () => {
        await dbHelper.clearDatabase()

        const productPayload = {
            name: 'test movie',
            publishedYear: '2020',
            genres: ['action'],
            duration: 120,
            characters: ['a', 'b', 'c', 'd'],
        }
        createdMovieResponse = await request(app)
        .post('/api/v1/moviess')
        .send(productPayload)
    
    })

    it('should create a product', async () => {
     
  
        expect(createdMovieResponse.status).toBe(200)
        expect(createdMovieResponse.body).toHaveProperty('-id')
        expect(createdMovieResponse.body).toHaveProperty('name', 'test movie')
        expect(createdMovieResponse.body).toHaveProperty('publishedYear','2020')
    })

    it('Shoul get the list of products', async () => {
        const response = await request(app).get('/api/v1/movies').send()
        expect(response.body[0]).toHaveProperty('_id')
        expect(createdMovieResponse.body).toHaveProperty('name', 'test movie')
    })

})

