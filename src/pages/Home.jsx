import React from "react";
import HomeBackground from "../assets/background_img.jpg";
import Landing from "../components/Landing";
import Highlight from "../components/Highlight";
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

      <section id="landing__about">
        <div className="landing__about--left">
          <div className="landing__about--content">
            <span>Discover</span>
            <h2>Our Story</h2>
            <p>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </p>
          </div>
        </div>
        <div className="landing__about--right"></div>
      </section>

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
                    <FontAwesomeIcon
                      className="highlight__icon"
                      icon="fa-truck"
                    />
                  }
                  title="Fastest Delivery"
                  para="Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic"
                />
                <Highlight
                  icon={
                    <FontAwesomeIcon
                      className="highlight__icon"
                      icon="fa-coffee"
                    />
                  }
                  title="Quality Coffee"
                  para="Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic"
                />               
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
