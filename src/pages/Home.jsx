import "../styles/pages/Home.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    axios
      .get("./logements.json")
      .then((response) => {
        setLogements(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="containerPage">
      <div className="App">
        <Header />
        <div className="decorationHome"></div>
        <div className="blocList">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              imageUrl={logement.cover}
              titrePropriete={logement.title}
              idPropriete={logement.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
