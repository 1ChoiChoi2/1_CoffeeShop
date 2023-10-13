import React from "react";
import Dish from "../components/Dish";

const Dishes = ({ dishes, dishesTitle }) => {
  return (
    <div>
      <h3>{dishesTitle}</h3>
      <ul className="dishes__list">
        {dishes
          .filter((dish) => dish.category === dishesTitle)
          .slice(0, 4)
          .map((dish) => (
            <Dish key={dish.id} dish={dish} />
          ))}
      </ul>
    </div>
  );
};

export default Dishes;
