import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



export const SignUp = () => {
    const [name, setName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [number, setNumber] = useState();
    const [gendar , setGendar] = useState('');
    // const header =
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(name, email, password, number,gendar,lName);
      axios.post("https://6433a3ee1c5ed06c9583781a.mockapi.io/products/Users", 
      {name:name,lName:lName, email:email, number:number, password:password,gendar:gendar })

    };
    const navigate=useNavigate()

  
    return (
      <>
        <form onSubmit={submitHandler}>
          <div
            style={{
              width: "250px",
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 10,
              border: "2px solid gray",
              padding: "10px",
            }}
          >
            <h1>Sign Up Form </h1>
            <div>
              <label> Name </label>
              <input
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  padding: "6px",
                  backgroundColor: "silver",
                }}
                type="text"
                value={name}
                placeholder="Name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label> Last Name </label>
              <input
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  padding: "6px",
                  backgroundColor: "silver",
                }}
                type="text"
                required
                value={lName}
                placeholder="last Name"
                onChange={(e) => {
                  setLName(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  padding: "6px",
                  backgroundColor: "silver",
                }}
                type="email"
                required
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>Gendar :
            <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={gendar}
        name="radio-buttons-group"
      onChange={(e)=>{ setGendar(e.target.value);}}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel sx={{display : 'none'}} required  control={<Radio />} label="" />
      </RadioGroup>
            </div>


            <div>
              <label>Phone No </label>
              <input
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  padding: "6px",
                  backgroundColor: "silver",
                }}
                type="number"
                required
                placeholder="number"
                defaultValue={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
  
            <div>
              <label>Password</label>
              <input
                style={{
                  border: "none",
                  borderBottom: "1px solid black",
                  padding: "6px",
                  backgroundColor: "silver",
                }}
                type="password"
                required
                placeholder="password"
                value={password || ""}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                textAlign:'center'
              }}
            >
              <span style={{ color: "gray", fontSize: "small", margin: "auto" }}>
                Alreday a member ?
                <label style={{color:'blue', cursor:'pointer'}} onClick={()=>{navigate("/")}}>Log in</label>
              </span>
            </div>
            
            <div>
              <button
                style={{ backgroundColor: "black", color: "White"  ,width:"100px" ,padding:"4px"}}
               type="submit"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </>
    );
  };