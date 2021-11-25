/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  price: number
  category: string
  description: string
  image: string
  variant: string[]
  customer: string[]
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  variant: [
    {
      color: {
        type: String,
      },
      size: {
        type: String,
      },
    },
  ],
  orderedBy: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Customer',
    },
  ],
})

export default mongoose.model<ProductDocument>('Product', productSchema)
