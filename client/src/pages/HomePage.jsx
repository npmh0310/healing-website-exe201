import React from "react";
import Logo from "../components/common/Logo";
import Hero from "../components/common/HomePage/Hero";
import Features from "../components/common/HomePage/Features";
import ProductList from "../components/common/HomePage/ProductList";
import Feedback from "../components/common/HomePage/Feedback";
import SubFeatures from "../components/common/HomePage/SubFeatures";

const HomePage = () => {
  return (
    <div className="min-h-[1440px]">
      <Hero />
      <SubFeatures />
      <Features />
      <ProductList />
      <Feedback />
    </div>
  );
};

export default HomePage;
