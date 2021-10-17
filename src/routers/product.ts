import express from 'express'

import {
  createProduct,
  findProductById,
  deleteProduct,
  findAllProduct,
  updateProduct,
} from '../controllers/product'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllProduct)
router.get('/:productId', findProductById)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)
router.post('/', createProduct)

export default router
