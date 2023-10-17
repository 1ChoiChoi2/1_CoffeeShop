import React from "react";
import cartBackground from "../assets/cartBackground.jpg";
import Landing from "../components/Landing";
import "../styles/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, removeFromCart, checkout }) => {
  // Calculate total price of the whole cart
  const calculateSubTotalPice = () => {
    let total = 0;

    for (const cartItem of cart) {
      total += cartItem.price * cartItem.quantity;
    }

    return total;
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return calculateSubTotalPice();
  };

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
            {cart.length > 0 ? (
              <div id="total">
                <div className="total__container">
                  <h3 className="total__title">Cart Totals</h3>
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span>${calculateSubTotalPice().toFixed(2)}</span>
                  </div>
                  <div className="delivery">
                    <span>Delivery</span>
                    <span></span>
                  </div>
                  <div className="discount">
                    <span>Discount</span>
                    <span></span>
                  </div>
                  <hr />
                  <div className="total">
                    <span>Total</span>
                    <span>${calculateTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
                <button onClick={checkout} className="total__button">
                  Proceed to Checkout
                </button>
              </div>
            ) : (
              <h1 className="cart__empty">You have no items in cart yet !</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
