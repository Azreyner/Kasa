import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/aPropos.scss";
import Dropdown from "../components/Dropdown";

function Apropos() {
  return (
    <div className="containerPage">
      <div className="Apropos">
        <Header />
        <div className="decoration"></div>
        <div className="lesDropDown">
          <Dropdown
            largeur="100%"
            titreDropdown="Fiabilité"
            contenuDropdown="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <Dropdown
            largeur="100%"
            titreDropdown="Respect"
            contenuDropdown="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Dropdown
            largeur="100%"
            titreDropdown="Service"
            contenuDropdown="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Dropdown
            largeur="100%"
            titreDropdown="Sécurité"
            contenuDropdown="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apropos;
