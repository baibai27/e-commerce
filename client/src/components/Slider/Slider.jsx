import { React, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Slider.scss";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const data = [
    "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/886404/pexels-photo-886404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,",
    "https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const prev = () => {
    setCurrent(current === 0 ? 2 : (prev) => prev - 1);
  };
  const next = () => {
    setCurrent(current === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        <img src={data[0]} alt="A girl" />
        <img src={data[1]} alt="A girl" />
        <img src={data[2]} alt="A guy" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prev}>
          <ArrowCircleLeftIcon />
        </div>
        <div className="icon" onClick={next}>
          <ArrowCircleRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
