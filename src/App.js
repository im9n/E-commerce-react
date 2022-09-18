import "./index";
import React, { useState, useEffect, useParams } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import { books } from "./data";
import SelectedBook from "./pages/SelectedBook";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function bookQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id ? { ...item, quantity: +quantity } : item
      )
    );
  }

  function AddToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function removeFromCart(book) {
    setCart(cart.filter((item) => item.id !== book.id));
  }

  function cartLength(){
  let length = 0
  cart.forEach(book => length += book.quantity)
  return length
  }

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} cartLength={cartLength} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          exact render={() => (<SelectedBook addToCart={AddToCart} books={books} cart={cart} />)}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} bookQuantity={bookQuantity} removeFromCart={removeFromCart} />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
