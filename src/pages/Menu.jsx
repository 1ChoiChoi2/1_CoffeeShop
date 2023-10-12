import React, { useState } from "react";
import Landing from "../components/Landing";
import MenuBackground from "../assets/menuBackground.jpg";
import Dishes from "../containers/Dishes";
import Product from "../components/Product";
import "../styles/Menu.css";

const Menu = ({ dishes }) => {
  const [dishesByCate, setDishesByCate] = useState(dishes);

  // List Dishes Category
  function listCategoryDishes() {
    const listCategory = dishes.map((dish) => dish.category);
    return [...new Set(listCategory)];
  }

  //Upercase the first letter
  function upperCaseFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  // Fetch Dishes by Category
  function dishesByCategory(dishCate) {
    console.log(dishCate);
    const dishesByCate = dishes.filter((dish) => dish.category === dishCate);

    setDishesByCate(dishesByCate);
  }

  return (
    <>
      <Landing backgroundUrl={MenuBackground} subtitle="Our Menu" />
      <div id="menu">
        <div className="container">
          <div className="row menu__container">
            <div className="menu__dishes--container">
              {listCategoryDishes().map((dishesTitle, i) => (
                <Dishes key={i} dishesTitle={dishesTitle} dishes={dishes} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="product">
        <div className="container">
          <div className="row">
            <div className="product__container">
              <span>Discover</span>
              <h2>Our Products</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="product__option--list__container">
              {listCategoryDishes().map((dishesTitle, i) => (
                <p
                  onClick={() => dishesByCategory(dishesTitle)}
                  key={i}
                  className="product__option--title"
                >
                  {upperCaseFirstLetter(dishesTitle)}
                </p>
              ))}
            </div>
            <div className="product__list">
              {dishesByCate.map((dish) => (
                <Product key={dish.id} dish={dish} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
