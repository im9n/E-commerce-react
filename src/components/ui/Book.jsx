import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { books } from "../../data";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pricing from "./Pricing";

const Book = (props) => {
  const rating = 4;

  return (
    <div className="book">
      <Link to={`/books/${props.item.id}`}>
        <figure className="book__img--wrapper">
          <img src={props.item.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${props.item.id}`} className="book__title--link">
          {props.item.title}
        </Link>
      </div>
      <Rating rating={props.item.rating}/>
      <Pricing salePrice={props.item.salePrice} originalPrice={props.item.originalPrice} />
    </div>
  );
};

export default Book;
