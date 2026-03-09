// App.js
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";
const App = () => {
  // Sample product list
  const products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];
  // State to manage cart items
  const [cart, setCart] = useState([]);
  // Add a product to the cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      // If product already in cart, increase quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // Else add new product with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  // Update the quantity of a product
  const updateQuantity = (productId, amount) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0), // Remove if quantity is 0
    );
  };
  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  // Submit cart to mock API
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart }),
        },
      );
      const result = await response.json();
      console.log("Cart submitted successfully:", result);
      alert("Cart submitted successfully!");
      setCart([]); // Clear cart after submission
    } catch (error) {
      console.error("Submission failed", error);
      alert("Failed to submit cart.");
    }
  };
  return (
    <div className="app-container">
      <h1>React Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
