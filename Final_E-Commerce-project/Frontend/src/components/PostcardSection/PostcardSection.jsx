import React from "react";
import "./PostcardSection.scss";
import ButtonCommon from "../ButtonCommon/ButtonCommon";

function PostcardSection() {
  return (
    <main className="flex center postcard-section-parent w-100">
      <section className="flex hero-section center column h-100 gap-8">
        <h1>GIVE THE GIFT OF A POSTCARD</h1>
        <h3>Give the gift of a lasting memory with a postcard</h3>

        <ButtonCommon
          className={"btn shop-btn"}
          btnText={"Purchase a Postcard"}
        />
      </section>
    </main>
  );
}

export default PostcardSection;
