import React from "react";
import "./Featured.scss";
import Card from "../Card/Card";

const Featured = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "jacket",
      isNew: true,
      olderPrice: 89,
      price: 40,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/4124201/pexels-photo-4124201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "dress",
      isNew: true,
      olderPrice: 49,
      price: 30,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hoodie",
      olderPrice: 69,
      price: 50,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "shirt",
      olderPrice: 59,
      price: 40,
    },
  ];
  return (
    <div className="featured">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          soluta dolores hic cupiditate mollitia optio minus architecto
          accusantium placeat dolor aspernatur, earum fugiat, eum, recusandae
          explicabo voluptate? Non, eaque. Officiis dolorum ipsa ipsum
          temporibus facilis aliquid tempore ad illum!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
