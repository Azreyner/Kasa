import { Link } from "react-router-dom";
import logo from "../assets/img/KasaLogoHeader.png";
import "../styles/components/header.scss";

function Header() {
  return (
    <div className="headerKasa">
      <header>
        <Link to={"/"}>
          <img src={logo} alt="Logo de Kasa" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Accueil</Link>
            </li>
            <li>
              <Link to={`/apropos`}>A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
