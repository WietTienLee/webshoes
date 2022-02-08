import Cart from "./components/Cart/Cart";
import ProductCart from './components/ProductCart/ProductCart';
import { useState } from 'react';
function App() {
  const [arr, setArr] = useState([])
  const handleAddToCart = (arr) => {
    setArr(arr)
  }
  return (
    <div className="App">
      <div className="main-contain">
        <Cart addToCart={handleAddToCart} />
        <ProductCart arr={arr} />
      </div>
      <div className="shape"></div>
    </div>
  );
}

export default App;
