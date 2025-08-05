import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
const Home = () => {
  return (
    <div className="max-w-[1420px] mx-auto">
      <Hero />
      <Products />
    </div>
  );
};

export default Home;
