import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Cateogries</h1>
          <span>Women</span>
          <span>Women</span>
          <span>Children</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quae hic dolorem quo ratione maxime placeat doloribus consequuntur
            rem sapiente?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quos
            id doloribus! Incidunt alias quia porro maiores fugiat quidem sunt
            impedit placeat, expedita labore quam.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">GuiizeStore</span>
          <span className="copyright">&#169;</span>
        </div>
        <div className="right">
          <img
            src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png"
            width={400}
            height={50}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
