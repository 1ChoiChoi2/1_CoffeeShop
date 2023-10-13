import React from "react";
import "../styles/Landing.css";

const Landing = ({ backgroundUrl, titleWelcome, title, subtitle, para, button }) => {
  // BackGround Styling
  const backGroundStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <header style={backGroundStyle}>
      <div className="header__container">
        <div className="header__title--container">
          <p className="header__title--welcome">{titleWelcome}</p>
          <h1 className="header__title--main">{title}</h1>
          <h1 className="header__sub-title">{subtitle}</h1>
        </div>
        <p className="header__para">{para}</p>
      </div>
    </header>
  );
};

export default Landing;
