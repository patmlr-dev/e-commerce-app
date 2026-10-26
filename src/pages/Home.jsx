import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const products = getProducts();

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">
          Welcome to <em>ShopNow</em>!
        </h1>
        <p className="home-subtitle">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="home-content">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
