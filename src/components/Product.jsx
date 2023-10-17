import React from "react";
import { Link } from "react-router-dom";

const Product = ({ dish }) => {
  return (
    <>
      <Link to={`/menu/${dish.id}`} className="product">
        <figure className="product__img--container">
          <img src={dish.url} alt="dish" />
        </figure>
        <p className="product__title" href="#">
          {dish.title}
        </p>
        <p className="product__para">{dish.description}</p>
        <span className="product__price">${dish.price.toFixed(2)}</span>
      </Link>
    </>
  );
};

export default Product;
