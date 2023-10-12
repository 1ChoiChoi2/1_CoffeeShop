import React from "react";

const Product = ({ dish }) => {
  return (
    <div className="product">
      <figure className="product__img--container">
        <img src={dish.url} alt="dish" />
      </figure>
      <a className="product__title" href="#">
        {dish.title}
      </a>
      <p className="product__para">{dish.description}</p>
      <span className="product__price">${dish.price.toFixed(2)}</span>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
