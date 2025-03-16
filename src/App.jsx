import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop", price: 999, quantity: 1 },
    { id: 2, name: "Smartphone", price: 699, quantity: 1 },
    { id: 3, name: "Headphones", price: 199, quantity: 1 },
  ]);

  // Function to increase item quantity by 1
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity } : item
      )
    );
  };

  // Function to decrease item quantity by 1, but not below 1
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity }
          : item
      )
    );
  };

  // Function to completely remove an item from the cart
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
