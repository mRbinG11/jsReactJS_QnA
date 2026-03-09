// components/Cart.js
import React from "react";
// Cart component displays all cart items and quantity controls
const Cart = ({ cart, updateQuantity, removeFromCart, handleSubmit }) => {
  return (
    <div className="cart-section">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Total (₹)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    {item.quantity}
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </td>
                  <td>{item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
