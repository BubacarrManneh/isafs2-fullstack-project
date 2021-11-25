/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type orderDocument = Document & {
  orderId: string
  quantity: number
  price: number
  description: string
  product: string[]
  customer: string[]
}

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    index: true,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  product: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
    },
  ],
  customer: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Customer',
    },
  ],
})

export default mongoose.model<orderDocument>('Order', orderSchema)
