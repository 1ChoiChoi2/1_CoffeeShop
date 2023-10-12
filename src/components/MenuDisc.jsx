import React from "react";
import Drink1 from "../assets/menu-1.jpg";
import Drink2 from "../assets/menu-2.jpg";
import Drink3 from "../assets/menu-3.jpg";
import Drink4 from "../assets/menu-4.jpg";

const MenuDisc = () => {
  return (
    <div id="menu__discover">
      <div className="container">
        <div className="row menu__discover--container">
          <div className="menu__discover--content">
            <span>Discover</span>
            <h2>Our Menu</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <button>View Full Menu</button>
          </div>
          <div className="menu__discover--imgs">
            <figure>
              <img src={Drink1} alt="coffee drink" />
            </figure>
            <figure>
              <img src={Drink2} alt="coffee drink" />
            </figure>
            <figure>
              <img src={Drink3} alt="coffee drink" />
            </figure>
            <figure>
              <img src={Drink4} alt="coffee drink" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDisc;
