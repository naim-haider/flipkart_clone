import React from "react";
import { Favorite } from "@mui/icons-material";
import { CardGiftcard } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import { ConfirmationNumber } from "@mui/icons-material";
import { Store } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Signup.css"; 
 
const SignupPage = () => {

  return (
    <div className="logint">
      <div className="logint__i">
        <h2>New customer?</h2>
        <Link className="signup" to={'/signupSite'}>Signup</Link>
      </div>
      <hr />
      <div className="logint__in">
        <AccountCircle />
        <p>My Profile</p>
      </div>
      <hr />
      <div className="logint__in">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
          alt=""
        />
        <p>Flipkart Plus</p>
      </div>
      <hr />
      <div className="logint__in">
        <Store />
        <p>Orders</p>
      </div>
      <hr />
      <div className="logint__in">
        <Favorite />
        <p>Wishlist</p>
      </div>
      <hr />
      <div className="logint__in">
        <ConfirmationNumber />
        <p>Rewards</p>
      </div>
      <hr />
      <div className="logint__in">
        <CardGiftcard />
        <p>Gift Cards</p>
      </div>
    </div>
  );
};

export default SignupPage;
