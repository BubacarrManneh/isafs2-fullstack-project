import Customer, { CustomerDocument } from '../models/Customer'
import { NotFoundError } from '../helpers/apiError'

type Profile = {
  given_name: string
  family_name: string
  name: string
  email: string
  picture: string
}

const findCustomerByEmail = async (
  customerProfile: Profile
): Promise<CustomerDocument> => {
  // eslint-disable-next-line @typescript-eslint/camelcase
  const { given_name, family_name, name, email, picture } = customerProfile
  const customer = await Customer.findOne({ email: email })
  if (!customer) {
    const newCustomer = new Customer({
      // eslint-disable-next-line @typescript-eslint/camelcase
      given_name,
      // eslint-disable-next-line @typescript-eslint/camelcase
      family_name,
      name,
      email,
      picture,
    })
    const createdCustomer = await newCustomer.save()
    return createdCustomer
  } else {
    return customer
  }
}
const createCustomer = async (
  customer: CustomerDocument
): Promise<CustomerDocument> => {
  return customer.save()
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
  findCustomerByEmail,
  findCustomerById,
  findAllCustomer,
  updateCustomer,
  deleteCustomer,
}
