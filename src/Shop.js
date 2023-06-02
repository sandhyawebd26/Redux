import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { Decreament, Increment } from "./state/action-creators/action";
const Shop = () => {
  const dispatch = useDispatch();


  return (
    <div className="container mt-5 mr-5">
      <h2>Deposit/withdraw money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>dispatch(Decreament(100))}>
        -
      </button>
      Update balance
      <button
        className="btn btn-primary mx-2"
        
        onClick={()=>dispatch(Increment(100))}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
