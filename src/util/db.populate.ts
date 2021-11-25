import mongoose from 'mongoose'
import axios from 'axios'
import ProductDocument from '../models/Product'

const getProductData = async () => {
  const result = await axios.get('https://fakestoreapi.com/products')

  const productsData = result.data
  const transformed = productsData.map((product: any) => {
    return {
      name: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image,
    }
  })
  await ProductDocument.insertMany(transformed)
}

mongoose
  .connect('mongodb://localhost:27017/isafs2-fullstack-project_Bubacarr', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(async () => {
    console.log('connected to mongidb')
    return await getProductData()
  })
  .then(() => {
    process.exit(0)
  })
