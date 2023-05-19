import useFetch from "../../hooks/useFetch";
import "./Featured.scss";
import Card from "../Card/Card";

const Featured = ({ type }) => {
  // const [data, setData] = useState([]);
  // const url = import.meta.env.VITE_APP_API_URL;
  // const token = import.meta.env.VITE_APP_API_TOKEN;

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

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
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Featured;
