import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart, changeQuantity, clearCart }) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal === 0 || subtotal >= 999 ? 0 : 49;
  const total = subtotal + delivery;

  return (
    <section className="page-section section-padding">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">Your chosen goodies</span>
          <h1>Your shopping <span>bag.</span></h1>
          <p>Review your selected products before continuing.</p>
        </div>

        {cart.length === 0 ? (
          <div className="empty-state">
            <i className="bi bi-bag"></i>
            <h2>Your bag is waiting for goodies.</h2>
            <p>You haven't added any products yet.</p>
            <Link to="/products" className="primary-button">
              Explore products <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        ) : (
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>{item.weight}</p>
                      <strong>₹{item.price}</strong>

                      <div className="quantity-control">
                        <button onClick={() => changeQuantity(item.id, -1)} aria-label="Decrease quantity">−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => changeQuantity(item.id, 1)} aria-label="Increase quantity">+</button>
                      </div>
                    </div>

                    <div className="cart-item-end">
                      <strong>₹{item.price * item.quantity}</strong>
                      <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                        <i className="bi bi-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="text-link cart-clear" onClick={clearCart}>
                Clear cart
              </button>
            </div>

            <div className="col-lg-4">
              <div className="cart-summary">
                <h2>Order summary</h2>
                <div><span>Subtotal</span><strong>₹{subtotal}</strong></div>
                <div><span>Delivery</span><strong>{delivery === 0 ? "Free" : `₹${delivery}`}</strong></div>
                {subtotal > 0 && subtotal < 999 && (
                  <p className="delivery-note">Add ₹{999 - subtotal} more for free demo delivery.</p>
                )}
                <hr />
                <div className="cart-total"><span>Total</span><strong>₹{total}</strong></div>
                <button
                  className="primary-button checkout-button"
                  onClick={() => window.alert("This is a demo checkout. No payment has been made.")}
                >
                  Continue to checkout <i className="bi bi-arrow-right"></i>
                </button>
                <Link to="/products" className="continue-shopping">
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;