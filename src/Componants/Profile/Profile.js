import { About } from "./About/About";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar";
import {useParams } from "react-router-dom";
import styles from "./Profile.module.css";
import { useState } from "react";
import { Setting } from "./Setting/Setting";
import { Address } from "./address/Address";

const Profile = () => {

  const userdata = localStorage.getItem('userdata')
  const [personalinfo, setPersonalInfo] = useState(true);
  const [about, setAbout] = useState(false);
  const [setting, setSetting] = useState(false);
  const [address ,setAddress] = useState(false)
  const [logout , setLogout] = useState(false)
  const [userData, setUserData] = useState(JSON.parse(userdata));
  const params = useParams();
  console.log(userData);

  return (
    <div className={styles.container}>

      <ProfileNavbar
       setInfo={setPersonalInfo}
       setAbout={setAbout}
       setSetting={setSetting}
       setAddress={setAddress}
       setLogout={setLogout}
       

       />

      {personalinfo ? (
        <PersonalInfo userData={userData} />
      ) : about ? (
        <About />
      ) : setting ? (
        <Setting />
      ) :address ?(<Address userData={userData}/>

      )
      : (
        "null"
      )
      }
    </div>
  );
};

export default Profile;
