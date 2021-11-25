/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type CustomerDocument = Document & {
  name: string
  firstName: string
  lastNname: string
  email: string
  picture: string
  address: string[]
  order: string[]
  Product: string[]
  role: string
}

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  // eslint-disable-next-line @typescript-eslint/camelcase
  firstName: {
    type: String,
  },
  // eslint-disable-next-line @typescript-eslint/camelcase
  lastName: {
    type: String,
  },
  picture: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  address: [
    {
      street: {
        type: String,
      },
      zip: {
        type: Number,
        min: 1,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
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
  role: {
    type: String,
    default: 'customer',
  },
})

export default mongoose.model<CustomerDocument>('Customer', customerSchema)
