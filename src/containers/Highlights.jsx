import React from "react";
import Highlight from "../components/Highlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Highlights = () => {
  return (
    <section id="landing__highlights">
      <div className="container">
        <div className="row">
          <div className="landing__highlights--container">
            <Highlight
              icon={
                <FontAwesomeIcon
                  className="highlight__icon"
                  icon="fa-arrow-up-a-z"
                />
              }
              title="Easy To Order"
              para="Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic"
            />
            <Highlight
              icon={
                <FontAwesomeIcon className="highlight__icon" icon="fa-truck" />
              }
              title="Fastest Delivery"
              para="Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic"
            />
            <Highlight
              icon={
                <FontAwesomeIcon className="highlight__icon" icon="fa-coffee" />
              }
              title="Quality Coffee"
              para="Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
