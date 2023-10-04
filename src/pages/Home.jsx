import React from "react";
import HomeBackground from "../assets/background_img.jpg";
import Landing from "../components/Landing";

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
    </div>
  );
};

export default Home;
