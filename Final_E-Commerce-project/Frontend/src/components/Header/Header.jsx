import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import './Header.scss';

function Header() {
  return (
    <header className="flex header-parent center space-btw">
      <section className="header-brand">COOL E-SHOP</section>
      <section className="nav-section">
        <div className="flex nav-parent">
          <ul className="flex nav-items center w-100">
            <li className="flex nav-links center">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="flex nav-links center">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="flex nav-links center">
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li className="flex nav-links center">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <span className="flex center cart-logo">
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          <span className="flex center profile-logo">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </section>
    </header>
  );
}

export default Header;
