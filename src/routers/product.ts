import express from 'express'
import passport from 'passport'
import adminCheck from '../middlewares/adminCheck'

import {
  createProduct,
  findProductById,
  deleteProduct,
  findAllProduct,
  updateProduct,
} from '../controllers/product'

const router = express.Router()

// Every path we define here will get /api/v1/products
router.get('/', findAllProduct)
router.get('/:productId', findProductById)
router.put(
  '/:productId',
  passport.authenticate('jwt', { session: false }),
  adminCheck,
  updateProduct
)
router.delete('/:productId', deleteProduct)
// router.post('/:productId', addProductToOrder)
router.post('/', createProduct)

export default router
