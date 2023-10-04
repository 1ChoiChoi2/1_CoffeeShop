import React from "react";
import HomeBackground from "../assets/background_img.jpg";
import Landing from "../components/Landing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Landing
        backgroundUrl={HomeBackground}
        titleWelcome="Welcome"
        title="The best coffee testing experience"
        para="A small river named Duden flows by their place and supplies it with
        the necessary regelialia."
        button="View Menu"
      />
      <section id="landing__contacts">
        <div className="container">
          <div className="row">
            <div className="landing__contacts--container">
              <div className="landing__contact">
                <FontAwesomeIcon
                  className="landing__contact--icon"
                  icon="fa-phone"
                />
                <div className="landing__contact--detail">
                  <p className="landing__contact--title">000 (123) 456 7890</p>
                  <p className="landing__contact--description">
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
              <div className="landing__contact">
                <FontAwesomeIcon
                  className="landing__contact--icon"
                  icon="fa-location-crosshairs"
                />
                <div className="landing__contact--detail">
                  <p className="landing__contact--title">
                    198 West 21th Street
                  </p>
                  <p className="landing__contact--description">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </div>
              </div>
              <div className="landing__contact">
                <FontAwesomeIcon
                  className="landing__contact--icon"
                  icon="fa-clock"
                />
                <div className="landing__contact--detail">
                  <p className="landing__contact--title">Open Monday-Friday</p>
                  <p className="landing__contact--description">
                    8:00am - 9:00pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
