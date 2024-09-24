import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import { FeatureProducts } from "../../utils/constants";
import Card from "../../components/Card/Card";
import HeroSection from "../../components/HeroSection/HeroSection";

function Home() {
  return (
    <div className="home-parent">
      <Header />
      <HeroSection />
      <section className="flex feature-products center">
        {FeatureProducts?.map((product) => {
          return (
            <Card
              cardImg={product.cardImg}
              cardTitle={product.cardTitle}
              cardDesc={product.cardDesc}
              caption={product.caption}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Home;
