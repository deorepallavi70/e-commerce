import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addtocart } from "../Home/ShoppingCard";
// import Button from "./components/Button";

function Counter(props) {
  const [count, setCount] = useState(props.count);

  // const payload = addtocart.find(props.id === addtocart.id);
  // console.log("payload",payload)
  const payload = addtocart.find((cart) => props.id === cart.id);
  console.log("payload", payload);

  useEffect(() => {
    payload.qty=count;
    console.log(addtocart);
    console.log("payload ---> ",payload.qty);
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => setCount(count + 1)}> + </button>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}

export default Counter;
