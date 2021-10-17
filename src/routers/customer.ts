import express from 'express'

import {
  createCustomer,
  findCustomerById,
  deleteCustomer,
  findAllCustomer,
  updateCustomer,
} from '../controllers/customer'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllCustomer)
router.get('/:customerId', findCustomerById)
router.put('/:customerId', updateCustomer)
router.delete('/:customerId', deleteCustomer)
router.post('/', createCustomer)

export default router
