import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51N8U55Bnwa6Cpnw13NQswpqeh4YLCxoN5zk5crZ9iV7GXVNCRsBQThjhD9LjvAbfIai2ciGacQ6YiSksH6SdvOBQ00CA5LyTsF"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={import.meta.env.VITE_APP_UPLOAD + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x $ {item.price}
            </div>
          </div>
          <DeleteOutlineIcon
            className="delete"
            onClick={() => {
              dispatch(removeItem(item));
            }}
          />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span
        className="reset"
        onClick={() => {
          dispatch(resetCart());
        }}
      >
        Rest Cart
      </span>
    </div>
  );
};

export default Cart;
