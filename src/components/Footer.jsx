import { Link } from "react-router-dom";
import logo from "../assets/img/logoKasaFooter.png";
import "../styles/components/footer.scss";

function Footer() {
  return (
    <div className="footerKasa">
      <Link to={"/"}>
        <img src={logo} alt="Logo de Kasa" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
