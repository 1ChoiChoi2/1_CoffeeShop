import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/" className="nav__logo">
          Coffee
          <small>Blend</small>
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="nav__link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav__link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav__link nav__icon">
              <FontAwesomeIcon icon="shopping-cart" />
              <span className="cart__length">2</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
