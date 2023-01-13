import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/card.scss";

const Card = (props) => {
  const { imageUrl, titrePropriete, idPropriete } = props;
  return (
    <Link to={`/ficheLogement`}>
      <div className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="card__content">
          <h3>{titrePropriete}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
