import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const FicheLogement = () => {
  const location = useLocation();
  const { idPropriete } = location.state;
  const [logement, setLogement] = useState({});

  useEffect(() => {
    axios.get("../logements.json")
      .then(response => {
        const foundLogement = response.data.filter(l => l.id === idPropriete);
        setLogement(foundLogement[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [idPropriete]);

  return (
    <div className="ficheLogement">
      <Header />
      <p>{logement.title}</p>
    </div>
  );
};

export default FicheLogement;
