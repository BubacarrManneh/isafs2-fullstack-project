import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Product } from './types'
import ProductCard from './Product'
import '../App.css'

function Home(){
    const [products, setProducts] = useState<Product[]>([])

    const getAllProducts = async()=> {
    const response = await axios.get<Product[]>('/product')
    setProducts(response.data)
    }

    useEffect(() => {
    getAllProducts()
    },[])
    return (
        <div className='home'>
            <h1>Welcome to my e-commerce store home page</h1>
            {products.map((product) => {
                return <ProductCard key={product.name} product={product} />

            })}
        </div>
    )
}

export default Home
