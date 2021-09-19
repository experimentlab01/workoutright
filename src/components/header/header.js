import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import Navbar from "./navbar";

const Header = () => {
 
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          {/* <a href="/" className="header-logo">LOGO</a> */}
          <Link to="/" className="header-logo">
            <img
              style={{ width: 90, marginLeft: 50, marginBottom: 0 }}
              src={logo}
              alt="LOGO"
            ></img>
          </Link>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          {/* <hr className="header-top__seperator" /> */}
        </section>
      </section>
      {/* <section className="header-bottom">
        <section className="header-bottom__phone">99999999999</section>
        <section className="header-bottom__email">shop.info@gmail.com</section>
      </section> */}
      <hr className="header-top__seperator" />
    </section>
  );
};

export default Header;