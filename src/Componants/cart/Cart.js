import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import styles from "./Cart.module.css";
import { Input, TextField } from "@mui/material";
import { useState } from "react";
import { TextFields } from "@mui/icons-material";
import { addtocart } from "../Home/ShoppingCard";
import DeleteIcon from "@mui/icons-material/Delete";
import Counter from "./Counter";

export default function Cart(props) {
  const theme = useTheme();

  const [total, setTotal] = useState(0);

  let [cart, setCart] = useState(addtocart);
  

  const deleteHandlerForCart = (id) => {
    console.log(id);
    addtocart.splice(id, 1);
    console.log(addtocart);
    setCart(addtocart);
  };
  let totalPrice = [];

  let sum = 0;

  React.useEffect(() => {
    console.log("addtocart===>", addtocart);
    setCart([...addtocart]);
  }, [addtocart]);
  React.useEffect(() => {
    totalPrice.map((price) => {
      sum = sum + price;
    });
    setTotal(sum);
  },[totalPrice]);

  return (
    <div>
      {cart.map((cart, i) => {
        // setTotal(...total+cart.price)
        totalPrice.push(cart.price * cart.qty);

        return (
          <div className={styles.cart} key={i}>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {cart.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <b>Vidhis Product</b>
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  ${cart.price}
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <Counter count={cart.qty} id={cart.id} />
                </Box>
              </Box>

              <CardMedia
                component="img"
                sx={{ width: 130 }}
                image={cart.img}
                alt="Live from space album cover"
              />
              <div>
                <DeleteIcon onClick={() => deleteHandlerForCart(i)} />
              </div>
            </Card>
          </div>
        );
      })}
      <div>
        <h4>Total Price : $ {total}</h4>
      </div>
      <button>Buy now </button>
    </div>
  );
}
