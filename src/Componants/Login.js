import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Button, Typography, backdropClasses } from "@mui/material";
import axios from "axios";
import shadows from "@mui/material/styles/shadows";
// import { data } from "./dummyData";
import  "../Componants/Components.css";


export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();
    axios.get('https://6433a3ee1c5ed06c9583781a.mockapi.io/products/Users').then((res) => setData(res.data));
    console.log(data)
    const payload = data.find(
      (users) => users.name === name && users.password === password
    );
    if(!data) return null;
    if (payload) {
      console.log(payload);
      localStorage.setItem("username", payload.name);
      localStorage.setItem("id", payload.id);
      localStorage.setItem("userdata", JSON.stringify(payload));
      navigate("/home");
    } else {
      console.log("user not found");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        
      }}
    >
      <form
        style={{
          width: "250px",
          border: "3px solid black",
          padding: "50px",
          height: "100%",
          borderRadius:"50px",
          background:"rgb(176,202,240)",
          boxShadow:"-20px 20px 10px 10px rgb(7,26,108)"
          
        }}
        onSubmit={submitHandler}
      >
        <h1>Login Form</h1>
        <TextField
          id="name"
          type="text"
          label="Name"
          variant="filled"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="password"
          type="password"
          label="password"
          variant="filled"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          
          }}
        />
        <Button className="login-btn"
          type="submit"
          style={{ border: "1px solid black" }}
          variant="contained"
        >
          {" "}
          
          Login
        </Button>
        <div>
          <Typography onClick={() => navigate("/signup")}>
            don't have an account
          </Typography>
        </div>
      </form>
    </div>
  );
};
