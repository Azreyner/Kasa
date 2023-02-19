import React, { useState } from "react";
import grandeFlecheDroite from "../assets/img/GrandeFlecheBlancheDroite.png";
import grandeFlecheGauche from "../assets/img/GrandeFlecheBlancheGauche.png";
import "../styles/components/carrousel.scss";

const Carrousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClickArrow = (isNext) => {
    const nextIndex = isNext
      ? currentImage === images.length - 1
        ? 0
        : currentImage + 1
      : currentImage === 0
      ? images.length - 1
      : currentImage - 1;
    setCurrentImage(nextIndex);
  };

  return (
    <div className="carrousel">
      {images.length > 1 &&<img
        className="carrousel__arrow carrousel__arrow--left"
        src={grandeFlecheGauche}
        alt="Flèche vers la gauche"
        onClick={() => handleClickArrow(false)}
      />}
      <img
        className="carrousel__image"
        src={images[currentImage]}
        alt="arrousel"
      />
      {images.length > 1 &&<img
        className="carrousel__arrow carrousel__arrow--right"
        src={grandeFlecheDroite}
        alt="Flèche vers la droite"
        onClick={() => handleClickArrow(true)}
      />}
      {images.length > 1 &&<div className="carrousel__indicator">
        {currentImage + 1}/{images.length}
      </div>}
    </div>
  );
};

export default Carrousel;
