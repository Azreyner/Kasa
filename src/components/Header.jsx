import { NavLink } from "react-router-dom";
import logo from "../assets/img/KasaLogoHeader.png";
import "../styles/components/header.scss";

const Header = () => {

  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="headerKasa">
      <header>
        <NavLink to={"/"}>
          <img src={logo} alt="Logo de Kasa" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to={`/`} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Accueil</NavLink>
            </li>
            <li>
              <NavLink to={`/apropos`} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
