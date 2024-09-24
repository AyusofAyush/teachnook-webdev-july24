import React from "react";
import "./HeroSection.scss";
import ButtonCommon from "../ButtonCommon/ButtonCommon";

function HeroSection() {
  return (
    <main className="hero-parent w-100">
      <section className="flex hero-section center column h-100">
        <h1>EARTH</h1>
        <h3>Multipurpose Store</h3>
        <ButtonCommon className={"btn shop-btn"} btnText={"Shop Now"} />
      </section>
    </main>
  );
}

export default HeroSection;
