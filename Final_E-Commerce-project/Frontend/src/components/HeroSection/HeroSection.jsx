import React from "react";
import "./HeroSection.scss";
import ButtonCommon from "../ButtonCommon/ButtonCommon";

function HeroSection({
  HeroTitle = null,
  HeroDesc = null,
  HeroBtnText = null,
  minHeightBox = null,
}) {
  return (
    <main
      className="hero-parent w-100"
      style={{
        minHeight: `${minHeightBox ? minHeightBox : "713px"}`,
      }}
    >
      <section className="flex hero-section center column h-100">
        {HeroTitle && <h1>{HeroTitle}</h1>}
        {HeroDesc && <h3>{HeroDesc}</h3>}
        {HeroBtnText && (
          <ButtonCommon className={"btn shop-btn"} btnText={HeroBtnText} />
        )}
      </section>
    </main>
  );
}

export default HeroSection;
