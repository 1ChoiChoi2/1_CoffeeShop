import React from "react";

const Dish = ({ dish }) => {
  return (
    <>
      <li className="dish">
        <figure className="dish__img">
          <img src={dish.url} alt="dish" />
        </figure>
        <div className="dish__detail">
          <div className="dish__detail--information">
            <span className="dish__detail--title">{dish.title}</span>
            <span className="dish__detail--dash"></span>
            <span className="dish__detail--price">
              ${dish.price.toFixed(2)}
            </span>
          </div>
          <p className="dish__detail--description">{dish.description}</p>
        </div>
      </li>
    </>
  );
};

export default Dish;
