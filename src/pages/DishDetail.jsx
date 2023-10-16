import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Landing from "../components/Landing";
import Product from "../components/Product";
import singleProductBackground from "../assets/singleProductBackground.jpg";
import "../styles/DishDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DishDetail = ({ dishes }) => {
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const dish = dishes.find((dish) => +dish.id === +id);

  // Find Related Dishes 
  const relatedDishes = dishes.filter(
    (relateddish) =>
      relateddish.category === dish.category && +relateddish.id !== +id
  );

  // Increment Quanity
  function incrementQuanity () {
    setQuantity(quantity + 1);
  }

  // Decrement Quanity
  function decrementQuanity () {
    if (quantity > 0) {
      setQuantity(quantity- 1);
    }
  }

  return (
    <>
      <Landing
        backgroundUrl={singleProductBackground}
        subtitle="Product Detail"
      />
      <div id="product_detail">
        <div className="container">
          <div className="row">
            <Link to="/menu" className="back-to-menu">
              <button>
                <FontAwesomeIcon icon="fa-arrow-left" />
              </button>
              <span>Back to Menu</span>
            </Link>
            <div className="product__detail--container">
              <figure className="product__detail--img__container">
                <img src={dish.url} alt="product" />
              </figure>
              <div className="product__detail--content">
                <h3 className="product__detail--title">{dish.title}</h3>
                <span className="product__detail--price">
                  ${dish.price.toFixed(2)}
                </span>
                <p className="product__detail--description">
                  {dish.description}
                </p>
                <div className="product__detail--quantity">
                  <button onClick={incrementQuanity}>+</button>
                  <span>{quantity}</span>
                  <button onClick={decrementQuanity}>-</button>
                </div>
                <button className="product__detail--add__cart">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="related__dishes">
              <div className="container">
                <div className="row related__dishes--container">
                  <div className="related__dish--content">
                    <span>Discover</span>
                    <h2>Related Products</h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>

                  <div className="related__product--list">
                    {relatedDishes.slice(0, 4).map((dish) => (
                      <Product key={dish.id} dish={dish} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishDetail;
