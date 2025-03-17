# Shopping Cart with Quantity Control

A responsive React application that demonstrates a functional shopping cart with quantity controls. Users can increase, decrease, or remove items from their cart with real-time price calculations.

![Shopping Cart Preview](https://github.com/user-attachments/assets/c3ac2c50-48f5-4ccc-8a14-586d8bbee3d4)

## Features

- Add, remove, and modify quantities of items in the cart
- Real-time calculation of total price based on item quantities
- Responsive design that works on desktop and mobile devices
- Clean, modern UI with smooth hover animations
- Empty cart state handling

## Technologies Used

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) for fast development and building
- CSS for styling with responsive design
- JavaScript ES6+ features

## Project Structure

```
shopping-cart-with-quantity-control/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DevShahmeer/shopping-cart-with-quantity-control.git
   cd shopping-cart-with-quantity-control
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Application Usage

- The cart displays initial sample items with their prices
- Use "+" and "-" buttons to increase/decrease quantities
- Click "Remove" to remove items from the cart
- The total price updates automatically when quantities change
- When all items are removed, an "empty cart" message is displayed

## Code Explanation

The main component in `App.jsx` manages a shopping cart with the following functionality:

```jsx
// State for cart items with initial products
const [cart, setCart] = useState([
  { id: 1, name: "Laptop", price: 999, quantity: 1 },
  { id: 2, name: "Smartphone", price: 699, quantity: 1 },
  { id: 3, name: "Headphones", price: 199, quantity: 1 },
]);

// Increases item quantity
const increaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

// Decreases item quantity without going below 1
const decreaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};

// Removes an item from the cart
const removeItem = (id) => {
  setCart(cart.filter((item) => item.id !== id));
};
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Customization

You can customize the appearance of the cart by modifying the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #f0f4f8;
  --accent-color: #e74c3c;
  --text-color: #333;
  --light-grey: #e1e5eb;
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --border-radius: 8px;
}
```

## Future Enhancements

- Add a form to add new products to the cart
- Implement local storage to persist cart data
- Add product categories and filtering
- Include product images
- Add checkout functionality

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

[DevShahmeer](https://github.com/DevShahmeer)

## Acknowledgments

- Project created with Vite's React template
