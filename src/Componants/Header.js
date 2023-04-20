import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import style from "./Header.module.css";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import { Button, Menu, MenuItem } from "@mui/material";
const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const username = localStorage.getItem('username');
  const id = localStorage.getItem('id');
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className={style.navbar}>
          <div
            className={style.element}
            style={{ padding: "20px", marginRight: "100%", width: "500px" }}
          >
            <Navbar.Brand
              href="#home"
              style={{ color: "white", fontSize: "28px" }}
            >
              Navbar
            </Navbar.Brand>
            <div className={style.link}>
              <Link to="/add">Add </Link>
            </div>
            <div
              style={{
                marginLeft: "800px",
                display: "flex",
                gap: 15,
                color: "white",
              }}
            >
              <FavoriteBorderTwoToneIcon onClick={()=>{
                navigate(`/wishlist/${id}`)
              }}/>
              <Button
                 style={{color:"white"}}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <PersonIcon />
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={()=>{navigate(`/profile/${id}`)}}>Profile</MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <div onClick={() => navigate("/cart")}>
                <AddShoppingCartTwoToneIcon />
              </div>
            </div>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
