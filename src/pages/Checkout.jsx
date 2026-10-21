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
    <>
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-items">
          <h2>Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.product.image} alt={item.product.name} />
              <div className="checkout-item-details">
                <h3>{item.product.name}</h3>
                <p>${item.product.price} each</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <p className="checkout-items-total">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="checkout-summary">
            <h2>Total</h2>
            <p>${total.toFixed(2)}</p>
            <button onClick={() => placeOrder()}>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
