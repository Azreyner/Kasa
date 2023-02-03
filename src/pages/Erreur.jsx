import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/pages/erreur.scss";

function Erreur() {
  return (
    <div className="containerPage">
      <div className="erreur">
        <Header />
        <div className="erreurContent">
          <h4 className="erreurContent__erreurTitre">404</h4>
          <p className="erreurContent__erreurPhrase">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link className="erreurContent__lien" to={"/"}>
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Erreur;
