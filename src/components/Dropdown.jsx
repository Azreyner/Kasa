import React, { useState } from "react";
import fleche from "../assets/img/flecheBlanche.png";
import "../styles/components/dropdown.scss";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`Dropdown ${isOpen ? "Dropdown--open" : ""}`}
      style={{ maxWidth: `${props.largeur}` }}
    >
      <div className="Dropdown__title" onClick={() => setIsOpen(!isOpen)}>
        <p>{props.titreDropdown}</p>
        <img
          src={fleche}
          alt="Fleche blanche"
          className={`Dropdown__arrow ${isOpen ? "rotated" : ""}`}
        />
      </div>
      <div className="Dropdown__content">
        {Array.isArray(props.contenuDropdown) ? (
          <ul>
            {props.contenuDropdown.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{props.contenuDropdown}</p>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
