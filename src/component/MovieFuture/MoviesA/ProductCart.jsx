import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Redux.css";

const ProductCart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.groupReducer.cart);
  console.log("===", cartItem);
  return (
    <div>
      {/* <h1>This is product cart</h1> */}
      <div className="card-parent">
        {cartItem.map((item) => {
          return (
            <div className="card">
              <img
                className="image"
                src={item.Poster}
                height="300px"
                width="200px"
                alt=""
              />

              <h3>{item.Title}</h3>
              <h4>Year: {item.Year}</h4>
              <h4>Rating: {item.Rating}</h4>
              <Link to="/details">
                <button
                  onClick={() =>
                    dispatch({ type: "Selected-Product", data: item })
                  }
                >
                  Details
                </button>
              </Link>
              <Link to="/cart">
                <button
                  onClick={() =>
                    dispatch({ type: "Remove-Product", data: item })
                  }
                >
                  Remove
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductCart;

// Remove at one time all product in delete  why same key same value in cart and delelt time all porduct delet this not good
/// unic id to do
