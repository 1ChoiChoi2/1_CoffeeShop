import React from "react";
import cartBackground from "../assets/cartBackground.jpg";
import Landing from "../components/Landing";
import "../styles/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <>
      <Landing backgroundUrl={cartBackground} subtitle="Cart" />
      <div id="cart">
        <div className="container">
          <div className="row">
            <div className="cart__container">
              <div className="cart__product">Product</div>
              <div className="cart__price">Price</div>
              <div className="cart__quantity">Quantity</div>
              <div className="cart__total">Total</div>
            </div>
            <div className="cart__items__container">
              {cart.map((cartItem) => (
                <div key={cartItem.id} className="cart__item">
                  <div className="cart__product">
                    <div
                      onClick={() => removeFromCart(cartItem.id)}
                      className="cart__item--remove"
                    >
                      <FontAwesomeIcon icon="fa-times" />
                    </div>
                    <figure className="cart__item--img">
                      <img src={cartItem.url} alt="product" />
                    </figure>
                    <div className="cart__item--description">
                      <h3 className="cart__item--title">{cartItem.title}</h3>
                      <p>{cartItem.description}</p>
                    </div>
                  </div>
                  <div className="cart__price">
                    ${cartItem.price.toFixed(2)}
                  </div>
                  <div className="cart__quantity">
                    <input
                      className="cart__item--quantity"
                      type="number"
                      defaultValue={cartItem.quantity}
                      min={0}
                      max={99}
                    />
                  </div>
                  <div className="cart__total">
                    ${(cartItem.price * cartItem.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div id="total">
              <div className="total__container">
                <h3 className="total__title">Cart Totals</h3>
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span>$10.00</span>
                </div>
                <div className="delivery">
                  <span>Delivery</span>
                  <span>$3.00</span>
                </div>
                <div className="discount">
                  <span>Discount</span>
                  <span>$1.00</span>
                </div>
                <hr />
                <div className="total">
                  <span>Total</span>
                  <span>$18.00</span>
                </div>
              </div>
              <button className="total__button">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
