import React from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";
import Engagement from "./Engagement";
import GetInTouch from "./GetInTouch";
import Counter from "./Counter";
import VisionMission from "./VisionMission";
import Clients from "../components/Home/Clients";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto flex flex-col justify-center items-center gap-5 p-10">
        <WhyChoose />
        <Engagement />
      </div>
      <GetInTouch />

      <div className="container mx-auto flex flex-col justify-center items-center gap-5 p-10">
        <Counter />
        <VisionMission/>
        <Clients/>
      </div>
      <Footer/>
    </>
  );
}

export default About;
