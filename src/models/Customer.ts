/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type CustomerDocument = Document & {
  firstName: string
  lastName: string
  address: string[]
  order: string[]
  Product: string[]
}

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    index: true,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  address: [
    {
      street: {
        type: String,
        require: true,
      },
      zip: {
        type: Number,
        required: true,
        min: 1234,
      },
      city: {
        type: String,
        require: true,
      },
      country: {
        type: String,
        require: true,
      },
    },
  ],
  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
  Product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
})

export default mongoose.model<CustomerDocument>('Customer', customerSchema)
