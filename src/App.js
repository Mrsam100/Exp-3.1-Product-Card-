import ProductCard from "./components/ProductCard";

import headphones from "./assets/headphones.webp";
import keyboard from "./assets/keyboard.webp";
import smartwatch from "./assets/smartwatch.jpg";
import "./App.css"; // ADD THIS LINE

function App() {
  return (
    <div className="container">
      <ProductCard
        name="Wireless Headphones"
        price={129.99}
        inStock={true}
        image={headphones}
      />

      <ProductCard
        name="Mechanical Keyboard"
        price={89.99}
        inStock={false}
        image={keyboard}
      />

      <ProductCard
        name="Smart Watch"
        price={199.99}
        inStock={true}
        image={smartwatch}
      />
    </div>
  );
}

export default App;
