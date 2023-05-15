import React, { useState, useEffect } from "react";
import "./Featured.scss";
import Card from "../Card/Card";
import axios from "axios";

const Featured = ({ type }) => {
  const [data, setData] = useState([]);
  const url = import.meta.env.VITE_APP_API_URL;
  const token = import.meta.env.VITE_APP_API_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url + "/products?populate=*", {
          headers: { Authorization: "bearer " + token },
        });
        console.log(res.data.data);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
