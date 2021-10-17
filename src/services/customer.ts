import Customer, { CustomerDocument } from '../models/Customer'
import { NotFoundError } from '../helpers/apiError'

const createCustomer = async (
  movie: CustomerDocument
): Promise<CustomerDocument> => {
  return movie.save()
}

const findCustomerById = async (
  customerId: string
): Promise<CustomerDocument> => {
  const foundCustomer = await Customer.findById(customerId)

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

const findAllCustomer = async (): Promise<CustomerDocument[]> => {
  return Customer.find().sort({ name: 1, publishedYear: -1 })
}

const updateCustomer = async (
  customerId: string,
  update: Partial<CustomerDocument>
): Promise<CustomerDocument | null> => {
  const foundCustomer = await Customer.findByIdAndUpdate(customerId, update, {
    new: true,
  })

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

const deleteCustomer = async (
  customerId: string
): Promise<CustomerDocument | null> => {
  const foundCustomer = Customer.findByIdAndDelete(customerId)

  if (!foundCustomer) {
    throw new NotFoundError(`Customer ${customerId} not found`)
  }

  return foundCustomer
}

export default {
  createCustomer,
  findCustomerById,
  findAllCustomer,
  updateCustomer,
  deleteCustomer,
}
