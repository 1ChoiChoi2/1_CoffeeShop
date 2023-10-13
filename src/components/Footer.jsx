import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row footer__container">
          <Link to="/" className="nav__logo">
            Coffee
            <small>Blend</small>
          </Link>
          <ul className="footer__links">
            <li>
              <Link to='/menu' className="footer__link">Menu</Link>
            </li>
            <li>
              <Link to='/blog' className="footer__link">Blog</Link>
            </li>
            <li>
              <Link to='/contact' className="footer__link">Contact</Link>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">
          Copyright &copy;2023 All rights served | Made by ChoiChoi
        </p>
      </div>
    </section>
  );
};

export default Footer;
