import React from "react";
import Landing from "../components/Landing";
import contactBackground from "../assets/contactBackground.jpg";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <Landing backgroundUrl={contactBackground} subtitle="Our Contact" />
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact__container">
              <div className="contact__information">
                <h4>Contact Information</h4>
                <p className="contact__information--address">
                  <span>Address</span>
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
                <p className="contact__information--phone">
                  <span>Phone</span>+ 1235 2355 98
                </p>
                <p className="contact__information--email">
                  <span>Email</span>
                  info@yoursite.com
                </p>
                <p className="contact__information--website">
                  <span>Website</span>
                  yoursite.com
                </p>
              </div>
              <form className="contact__form">
                <div className="contact__form--personal__information">
                  <div className="form__item form__item-1">
                    <label className="form__item--label">Your Name</label>
                    <input className="input" type="text" />
                  </div>
                  <div className="form__item form__item-2">
                    <label className="form__item--label">Your Email</label>
                    <input className="input" type="email" />
                  </div>
                </div>
                <div className="form__item form__item-3">
                  <label className="form__item--label">Subject</label>
                  <input className="input" type="text" />
                </div>
                <div className="form__item form__item-4">
                  <label className="form__item--label">Message</label>
                  <textarea className="input" type="text"></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
