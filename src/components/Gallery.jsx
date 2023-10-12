import React from "react";
import Gallery1 from "../assets/gallery-1.jpg";
import Gallery2 from "../assets/gallery-2.jpg";
import Gallery3 from "../assets/gallery-3.jpg";
import Gallery4 from "../assets/gallery-4.jpg";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery__container">
        <figure>
          <img src={Gallery1} alt="gallery" />
        </figure>
        <figure>
          <img src={Gallery2} alt="gallery" />
        </figure>
        <figure>
          <img src={Gallery3} alt="gallery" />
        </figure>
        <figure>
          <img src={Gallery4} alt="gallery" />
        </figure>
      </div>
    </section>
  );
};

export default Gallery;
