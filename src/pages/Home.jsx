import React from "react";
import HomeBackground from "../assets/background_img.jpg";
import Landing from "../components/Landing";
import Contacts from "../components/Contacts";
import About from "../components/About";
import Highlights from "../containers/Highlights";
import MenuDisc from "../components/MenuDisc";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
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
      <Contacts />
      <About />
      <Highlights />
      <MenuDisc />
      <Gallery />
    </div>
  );
};

export default Home;
