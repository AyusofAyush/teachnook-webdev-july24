import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import { FeatureProducts } from "../../utils/constants";
import Card from "../../components/Card/Card";
import HeroSection from "../../components/HeroSection/HeroSection";
import PostcardSection from "../../components/PostcardSection/PostcardSection";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home-parent">
      <Header />
      <HeroSection
        HeroTitle={"EARTH"}
        HeroDesc={"Multipurpose Store"}
        HeroBtnText={"Shop Now"}
      />
      <section className="flex feature-products center mb-16 divide-solid border-solid wrap">
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
      <section className="flex customer-section center my-[10%] "></section>
      <PostcardSection />
      <Footer />
    </div>
  );
}

export default Home;
