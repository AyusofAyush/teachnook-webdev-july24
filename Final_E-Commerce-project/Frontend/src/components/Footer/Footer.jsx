import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex footer-parent px-[3%] py-[2%] space-btw">
      <section className="nav-section">
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
      </section>
      <section className="header-brand font-semibold text-xl">COOL E-SHOP</section>
      <section className="copyright-section text-sm">
        Copyright © {new Date().getFullYear()} COOL E-SHOP
      </section>
    </div>
  );
}

export default Footer;
