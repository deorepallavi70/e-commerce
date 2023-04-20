import style from "./Address.module.css";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import FormLabel from '@mui/material/FormLabel';
import axios from "axios";


export const Address = (props) => {


  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [pincode, setPincode] = useState();
  const [locality, setLocality] = useState();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [alternatePhn, setAlternetphn] = useState();
  const [userId, setUserId] = useState();
  const [getAddress, setGetAddress] = useState("");
  const [anchorEl, setAnchorEl] = React.useState();


  const handleEdit = (user) => {
    // debugger;
    console.log('it works', user);
    setName(user.name);
    setNumber(user.number);
    setPincode(user.pincode);
    setLocality(user.locality);
    setAddress(user.address);
    setCity(user.city);
    setState(user.state);
    setLandmark(user.landmark);
    setAlternetphn(user.alternatePhn);
    setUserId(user.userid);
    console.log('locality of user', user.locality)
    console.log('locality of user', user.userid)
  }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getAdressData = () => {
    axios.get("https://6433a3ee1c5ed06c9583781a.mockapi.io/products/address").then((resp) => setGetAddress(resp.data))
    return;
  }

  const saveAddress = (e) => {

    e.preventDefault();
    axios.post(`https://6433a3ee1c5ed06c9583781a.mockapi.io/products/address/`, {
      userid: props.userData.id, name: name, number: number, pincode: pincode, locality: locality,
      address: address, city: city, state: state, landmark: landmark, alternatePhn: alternatePhn
    })
    setName("");
    setNumber('');
    setPincode('');
    setLocality('');
    setAddress("");
    setCity("");
    setState("");
    setLandmark("");
    setAlternetphn("");

  }
  const updateAddress = (e) => {
    e.preventDefault();
    axios.put(`https://6433a3ee1c5ed06c9583781a.mockapi.io/products/address/${userId}`, {
      name: name, number: number, pincode: pincode, locality: locality,
      address: address, city: city, state: state, landmark: landmark, alternatePhn: alternatePhn
    }).then(res => { setGetAddress(getAddress) })

    getAdressData();
    setName("");
    setNumber('');
    setPincode('');
    setLocality('');
    setAddress("");
    setCity("");
    setState("");
    setLandmark("");
    setAlternetphn("");

  }
  useEffect(() => {
    getAdressData();
  }, [])

  if (!getAddress) return null






  return (
    <div className={style.container}>
      <h1>Manage Address</h1>
      <div style={{
        display: "flex",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}>




      </div>

      <div>
        <form style={{ backgroundColor: "wheat", padding: "20px" }}>
          <TextField value={name} type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
          <TextField value={number} type="tel" placeholder="10-digit mobile number" onChange={(e) => { setNumber(e.target.value) }} />
          <TextField value={pincode} type="number" placeholder="Pincode" onChange={(e) => { setPincode(e.target.value) }} />
          <TextField value={locality} type="text" placeholder="Locality" onChange={(e) => { setLocality(e.target.value) }} />
          <TextField value={address} type="text" placeholder="Address(Area and Street)" onChange={(e) => { setAddress(e.target.value) }} />
          <TextField value={city} type="text" placeholder="City/District/Town" onChange={(e) => { setCity(e.target.value) }} />
          <TextField value={state} type="text" placeholder="state" onChange={(e) => { setState(e.target.value) }} />
          <TextField value={landmark} type="text" placeholder="LandMark(optional)" onChange={(e) => { setLandmark(e.target.value) }} />
          <TextField value={alternatePhn} type="tel" placeholder="Alternate Phone(optional)" onChange={(e) => { setAlternetphn(e.target.value) }} />
          <div style={{ textAlign: "start" }}>
            <FormLabel id="demo-radio-buttons-group-label" >Address</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Home"
              name="radio-buttons-group"

            >
              <FormControlLabel value="Home" control={<Radio />} label="Home" />
              <FormControlLabel value="work" control={<Radio />} label="Work" />

            </RadioGroup></div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Button sx={{ backgroundColor: "blue !important" }} variant="contained" onClick={saveAddress}>Save</Button>
            <Button sx={{ backgroundColor: "blue !important" }} variant="contained">Cancel</Button>
            <Button sx={{ backgroundColor: "blue !important" }} variant="contained" onClick={updateAddress}>Update</Button>
          </div>


        </form>
      </div>
      {getAddress.map((user) => {
        return <Card sx={{ minWidth: "100%", display: 'flex' }}>
          <div><CardContent>
            <Typography sx={{ fontSize: 14, display: "flex", gap: 4 }} color="text.secondary" gutterBottom>
              <Typography >{user.name} </Typography>
              <Typography >8530782236</Typography >
            </Typography>
            <Typography sx={{ fontSize: 14, float: 'left' }}> {user.landmark},{user.locality},{user.address},{user.city},{user.state} - {user.pincode} </Typography>
          </CardContent></div>
          <div><CardActions>





            <div>
              {/* <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                  <MoreVertIcon />
              </Button> */}
              <Typography onClick={() => handleEdit(user)}>Edit</Typography>
              {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >

                <MenuItem onClick={()=>handleEdit(user)}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Close</MenuItem>
                
              </Menu> */}
            </div>



          </CardActions></div>
        </Card>
      })}

    </div>
  );
};
