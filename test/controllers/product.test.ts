
import request from 'supertest'
import dbConnect,{MongodHelper} from './../db-helper'
import app from '../../src/app'

describe('product controller', () => {
    let dbHelper: MongodHelper

    beforeAll(async () => {
        dbHelper = await dbConnect()
    })

    beforeEach(async () => {
        await dbHelper.clearDatabase()
    })

    afterAll(async () => {
        await dbHelper.closeDatabase()
    })
    it('should create a product', async () => {
        const productPayload = {
            name: 'slim Jean', 
            price: '200', 
            category: 'Men',
            description: 'Men clothing', 
            variant: ['blue'], 
            customer: ['Mariam'] 
        }
        const response = await request(app)
        .post('/api/v1/products')
        .send(productPayload)
        
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('-id')
        expect(response.body).toHaveProperty('name', 'slim Jean')
        expect(response.body).toHaveProperty('price','200')
        expect(response.body).toHaveProperty('category', 'Men')
        expect(response.body).toHaveProperty('description', 'Men clothing',)

    })
    it('Shoul get the list of products', async () => {
        const response = await request(app).get('/api/v1/products').send()
        expect(response.body.length).toBeGreaterThan(0)
    })
})