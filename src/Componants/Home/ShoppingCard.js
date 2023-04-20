import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { cardData } from "../../data/CardData";
import { Button } from "@mui/material";
import { AddShoppingCartTwoToneIcon } from "@mui/icons-material/AddShoppingCartTwoTone";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export let addtocart = [];
export let wishlist = [];
export default function ShoppingCard() {
  const navigate = useNavigate();
  // const [cart, setCart] = useState();
  const addToCart = (id) => {
    console.log(id);
    const payload = cardData.find((card) => card.id === id);
    // localStorage.setItem('addedCart',`${JSON.stringify(payload)}`);
    addtocart.push(payload);
    console.log(addtocart);
  };
  const addToWishlist = (id) => {
    console.log(id);
    const payload = cardData.find((card) => card.id === id);
    // localStorage.setItem('addedCart',`${JSON.stringify(payload)}`);
    wishlist.push(payload);
    console.log(wishlist)
  };
  // React.useEffect(() => { 
  return (
    <div
      style={{
        width: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {cardData
        ? cardData.map((card, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <Card sx={{ maxWidth: 300, margin: "20px" }}>
                  <CardMedia>
                    <img
                      src={card.img}
                      style={{ height: "300px", border: "2px solid black" }}
                    />
                  </CardMedia>

                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {card.discription}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon onClick={() => addToWishlist(card.id)}/>
                      <span>{card.likes}</span>
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <Button
                      sx={{ border: "2px solid black" }}
                      onClick={() => addToCart(card.id)} >
                      {" "}
                      Add To Cart{" "}
                     </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        : null}
    </div>
  );
}
