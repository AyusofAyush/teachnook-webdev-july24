import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./About.scss";
import missionImg from "../../Assets/about1.jpg";
import PostcardSection from "../../components/PostcardSection/PostcardSection";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div className="about-parent">
      <Header />
      <HeroSection
        bgImgLocation={"../../Assets/about-bg.jpg"}
        HeroTitle={"WHO ARE WE?"}
        minHeightBox={"600px"}
      />
      <section className="flex mission-section m-[10%]  center">
        <div className="flex center mission-img mr-[5%]">
          <img src={missionImg} alt="Our mission" />
        </div>
        <div className="mission-message flex column w-[80%]">
          <h3 className="text-3xl font-semibold mb-4">OUR MISSION</h3>
          <p className="text-lg">
            Hello, my name is Tyler Moore and with the help of many people I
            made this template. I made it so it is super easy to update and so
            that it flows perfectly with my tutorials. Lots of love and hundreds
            of hours went into making it. I hope you love it as much as I do.
            <br /> <br />I wish you the best of luck with your business, enjoy the
            adventure.
          </p>
        </div>
      </section>
      <PostcardSection />
      <Footer />
    </div>
  );
}

export default About;
