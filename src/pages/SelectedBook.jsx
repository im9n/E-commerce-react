import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../components/ui/Book";
import Pricing from "../components/ui/Pricing";
import Rating from "../components/ui/Rating";

const SelectedBook = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookOnCart() {
    return cart.find(book => +book.id === +id)
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Pricing
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                  />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum consequuntur doloremque, eveniet quia iusto sint at
                    dolorum cum libero unde consectetur, quisquam nihil quasi
                    obcaecati nostrum, nam quos esse quis.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum consequuntur doloremque, eveniet quia iusto sint at
                    dolorum cum libero unde consectetur, quisquam nihil quasi
                    obcaecati nostrum, nam quos esse quis.
                  </p>
                </div>
                {bookOnCart() ? (
                  <Link to="/cart">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__cotaniner">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommened Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book item={book} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelectedBook;
