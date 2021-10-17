import express from 'express'

import {
  createOrder,
  findOrderById,
  deleteOrder,
  findAllOrder,
  updateOrder,
} from '../controllers/order'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllOrder)
router.get('/:orderId', findOrderById)
router.put('/:orderId', updateOrder)
router.delete('/:orderId', deleteOrder)
router.post('/', createOrder)

export default router
