import React from 'react'
import { Link } from 'react-router-dom'
import {Product} from './types'
import '../App.css'

type ProductProps = {
    product: Product
}

function ProductCard({product}: ProductProps){
    return (
        <div className='products'>
            <p>{product.image}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <Link to={`/product/${product._id}`}>Detail</Link>
        </div>
    )
}

export default ProductCard
