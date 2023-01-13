import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/card.scss";

const Card = (props) => {
  const { imageUrl, titrePropriete, idPropriete } = props;
  return (
    <Link to={`/ficheLogement/${idPropriete}`} state={{ idPropriete: idPropriete}} >
      <div className="card">
        <img src={imageUrl} className="card__image" alt={titrePropriete} />
        <div className="card__content">
          <h4>{titrePropriete}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
