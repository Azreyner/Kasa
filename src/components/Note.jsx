import "../styles/components/note.scss";
import React from "react";
import star from "../assets/img/star.svg";
import starGrise from "../assets/img/starGrise.svg";

const Note = (props) => {
  const { numberOfStars } = props;
  return (
    <div className="Note">
      {Array.from({ length: numberOfStars }, (_, i) => (
        <img key={i} src={star} alt="étoile" />
      ))}
      {Array.from({ length: 5 - numberOfStars }, (_, i) => (
        <img key={i} src={starGrise} alt="étoile grise" />
      ))}
    </div>
  );
};

export default Note;
