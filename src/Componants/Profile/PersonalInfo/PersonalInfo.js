
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import styles from "./PersonalInfo.module.css";
import React, { useState } from "react";
import axios from "axios";

export const PersonalInfo = (props) => {
  const [email,setEmail] = useState(props.userData.email)
  const [emailedit, setEmailEdit] = useState(true)
  const [phoneno,setPhoneno] = useState(true)
  

  const handleEdit = () => {
    // e.preventDefault();
    setEmailEdit(false)
    setPhoneno(false)



  }

  const handleSave = () => {
    setEmailEdit(true)
    setPhoneno(true)
    console.log(email);
  }
  return (<>
    <div className={styles.container}>



      <div className={styles.form}>
        <h3>Personal Information </h3>
        <TextField
          type="text"
          placeholder="fname"
          defaultValue={props.userData.name}
          disabled
        />

        <TextField
          type="text"
          placeholder="lname" defaultValue={props.userData.lname}
          disabled
        />

      </div>
      <div className={styles.radio}>
        <span>Your gender : </span>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={props.userData.gender}
          name="radio-buttons-group"
        >
          <div>
            <FormControlLabel value="female" control={<Radio />} label="Female" disabled />
            <FormControlLabel value="male" control={<Radio />} label="Male" disabled />

            <FormControlLabel value="other" control={<Radio />} label="Other" disabled />
          </div>
        </RadioGroup>
      </div>


      <div >
        <div className={styles.email}>
          <div><label>Email Address :</label>
            <TextField type="email"
              defaultValue={email}
              disabled={emailedit}
              onChange={(e)=>{setEmail(e.target.value)}}
            />

          </div>
          <div>
            <label>Phone Number :</label>
            <TextField type="tel"
              defaultValue={props.userData.number}
              disabled={phoneno}
            />
          </div>


        </div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleSave}> Save</button>
      </div>
      <div>
        <h1>FAQ</h1>
        <p>What happens when I update my email address (or mobile number)?
          Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).

          When will my  account be updated with the new email address (or mobile number)?
          It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.

          What happens to my existing Flipkart account when I update my email address (or mobile number)?
          Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.

          Does my Seller account get affected when I update my email address?
          has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>


      </div>
    </div>
  </>
  );
};

export default PersonalInfo;
