/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  productId: string
  name: string
  category: string
  description: string
  variant: string[]
  customer: string[]
}

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    index: true,
    require: true,
  },
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
    require: true,
  },
  variant: [
    {
      productId: {
        type: String,
        require: true,
      },
      color: {
        type: String,
        require: true,
      },
      size: {
        type: String,
        require: true,
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
