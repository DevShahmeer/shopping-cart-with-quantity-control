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

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity }
          : item
      )
    );
  };

  return <></>;
}

export default App;
