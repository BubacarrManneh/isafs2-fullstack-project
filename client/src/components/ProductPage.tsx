import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import ProductCard from './Product'
import ProCard from './ProCard'
import ProductCard from './Product'
import {Product} from './types'

type Params = {
    productId: string
}

function ProductPage() {
    const [product, setProduct] = useState<Product | null>(null)
    const { productId } = useParams<Params>()

    useEffect(() => {

        axios.get<Product>(`/product/${productId}`).then((response) => setProduct(response.data))
    }, [productId])
    return (
        <div>
            {product && <ProductCard product={product} />}
            {product && <ProCard product={product} />}
        </div>
    )
}

export default ProductPage
