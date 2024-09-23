import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import './Header.scss';

function Header() {
  return (
    <header className="header-parent">
      <section className="header-brand">COOL E-SHOP</section>
      <section className="nav-section">
        <div className="nav-parent">
          <ul className="nav-items">
            <li className="nav-links">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav-links">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="nav-links">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="nav-links">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <span className="cart-logo">
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          <span className="profile-logo">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </section>
    </header>
  );
}

export default Header;
