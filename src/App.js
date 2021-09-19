import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import data from "./data";
import { useState } from "react";

function App() {
  const { products } = data;
  const [cartItems, setCartitems] = useState([]);
  //function for Add more mobiles to cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartitems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartitems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  //function for remove the mobiles from the cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartitems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartitems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main onAdd={onAdd} products={products} cartItems={cartItems} />
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
