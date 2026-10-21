import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data/products"

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()

  useEffect( () => {
    const foundProduct = getProductById(id)

    if (!foundProduct) {
      navigate("/")
      return 
    }

    setProduct(foundProduct)
  }, [id]) 

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-content">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
