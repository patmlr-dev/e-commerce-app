import React from 'react'
import { getProducts } from '../data/products'
import ProductCard from '../components/ProductCard'

function Home() {
  const products = getProducts()
  console.log(products)
  return (
    <div>
        <div className="home-hero">
            <h1>Welcome to E-Comm App</h1>
            <p>Discover amazing products at great prices</p>
        </div>
        <div className="container">
            <h2>Our Products</h2>
            <div className="products-grid">
              {products.map( (product) => (
                <ProductCard product={product}  key={product.id}/>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Home
