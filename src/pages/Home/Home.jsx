import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import Category from "../../components/Category/Category";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Featured type="featured" />
      <Category />
      <Featured type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
