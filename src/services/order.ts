import Order, { orderDocument } from '../models/Order'
import { NotFoundError } from '../helpers/apiError'

const createOrder = async (order: orderDocument): Promise<orderDocument> => {
  return order.save()
}

const findOrderById = async (order: string): Promise<orderDocument> => {
  const foundOrder = await Order.findById(order)

  if (!foundOrder) {
    throw new NotFoundError(`Order ${order} not found`)
  }

  return foundOrder
}

const findAllOrder = async (): Promise<orderDocument[]> => {
  return Order.find().sort({ name: 1, publishedYear: -1 })
}

const updateOrder = async (
  order: string,
  update: Partial<orderDocument>
): Promise<orderDocument | null> => {
  const foundOrder = await Order.findByIdAndUpdate(order, update, {
    new: true,
  })

  if (!foundOrder) {
    throw new NotFoundError(`Order ${order} not found`)
  }

  return foundOrder
}

const deleteOrder = async (order: string): Promise<orderDocument | null> => {
  const foundOrder = Order.findByIdAndDelete(order)

  if (!foundOrder) {
    throw new NotFoundError(`Order ${order} not found`)
  }

  return foundOrder
}

export default {
  createOrder,
  findOrderById,
  findAllOrder,
  updateOrder,
  deleteOrder,
}
