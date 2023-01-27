import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Carrousel from "../components/Carrousel";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../styles/pages/ficheLogement.scss";
import Footer from "../components/Footer";

const FicheLogement = () => {
  const location = useLocation();
  const { idPropriete } = location.state;
  const [logement, setLogement] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("../logements.json");
      const logement = res.data.find((logement) => logement.id === idPropriete);
      setLogement(logement);
      setIsLoading(false);
    }
    fetchData();
  }, [idPropriete]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ficheLogement">
      <Header />
      <Carrousel images={logement.pictures} />
      <div className="infoGenerale">
        <div className="infoGenerale__infos1">
          <h3>{logement.title}</h3>
          <h5>{logement.location}</h5>
          <div className="infoGenerale__infos1__lesTags">
            {logement.tags.map((tag, index) => (
              <div key={index}>{tag}</div>
            ))}
          </div>
        </div>
        <div className="infoGenerale__infos2">
          <div className="infoGenerale__infos2__proprio">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="Propriétaire" />
          </div>
          <div className="infoGenerale__infos2__notesEtoile">
            <p>ETOILES</p>
          </div>
        </div>
      </div>
      <div className="infoDropdown">
        <Dropdown
          largeur="100%"
          titreDropdown="Description"
          contenuDropdown={logement.description}
        />
        <Dropdown
          largeur="100%"
          titreDropdown="Équipement"
          contenuDropdown={logement.equipments}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FicheLogement;
