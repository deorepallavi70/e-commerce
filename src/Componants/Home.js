import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ShoppingImg } from "./Home/ShoppingImg";
import ShoppingCard from './Home/ShoppingCard';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        
        <div>
        <ShoppingImg />
        </div>
        <div><h1> Deals</h1></div>
        <div><ShoppingCard/></div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
