import React from "react";
import Banner from "../banner/Banner";
import Features from "../Features/Features";
import PrimayButton from "../../../components/shared/button/PrimayButton";
import TopDeveveryMan from "../TopDeveveryMan/TopDeveveryMan";
import Count from "../counter/Count";
import About from "../about/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <About />
      <TopDeveveryMan />
      <Count />
    </div>
  );
};

export default Home;
