import React from "react";
import Logo from "../components/common/Logo";
import Hero from "../components/common/HomePage/Hero";
import Features from "../components/common/HomePage/Features";
import ProductList from "../components/common/HomePage/ProductList";

const HomePage = () => {
  return <div className="min-h-[1440px]">
      <Hero/>
      <Features/>
      <ProductList/>
  </div>;
};

export default HomePage;
