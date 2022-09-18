import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { books } from "../../data";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pricing from "./Pricing";

const Book = (props) => {
  const [img, setImg] = useState()

  const mountedRef = useRef(true)

  useEffect(() => {
    const image = new Image()
    image.src = props.item.url;
    image.onload = () => {
      setTimeout(() => {
       if (mountedRef.current) {
        setImg(image)
       }
      }, 300);
    }
    return () => {
      mountedRef.current = false
     }  
   });

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${props.item.id}`}>
            <figure className="book__img--wrapper">
              <img
                src={props.item.url}
                alt=""
                className="book__img"
              />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${props.item.id}`} className="book__title--link">
              {props.item.title}
            </Link>
          </div>
          <Rating rating={props.item.rating} />
          <Pricing
            salePrice={props.item.salePrice}
            originalPrice={props.item.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
