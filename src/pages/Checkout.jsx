import { useCart } from "../context/CartContext";

function Checkout() {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();
  const cartItems = getCartItemsWithProducts();

  const total = getCartTotal();

  function placeOrder() {
    alert("Successfully placed the order!");
    clearCart();
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Checkout</h1>
      <div className="checkout-content">
        <section className="checkout-order-details">
          <h2 className="checkout-section-header">Order Summary</h2>
          <div className="checkout-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item-container">
                <img
                  className="checkout-item-img"
                  src={item.product.image}
                  alt={item.product.name}
                />
                <div className="checkout-item-content">
                  <div className="checkout-item-details">
                    <h3>{item.product.name}</h3>
                    <p>${item.product.price} each</p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      className="checkout-qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="checkout-qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <p className="checkout-item-total">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="btn btn-red"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="checkout-summary">
          <h2 className="checkout-section-header">Total</h2>
          <p className="checkout-total">
            Subtotal: <span>${total.toFixed(2)}</span>
          </p>
          <button
            className="btn btn-blue btn-large btn-max-width"
            onClick={() => placeOrder()}
          >
            Place Order
          </button>
        </section>
      </div>
    </div>
  );
}

export default Checkout;
