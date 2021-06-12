import React from "react";
import Leaf from "../asset/Group 114.png";
import "./WelcomeToNature.css";
import OrganicFoodBlue from "../asset/Group 205.png";
import OrganicFoodWhite from "../asset/Group 207.png";

const WelcomeToNature = () => {
  return (
    <div>
      <center>
        <div className="nature">
          <img src={Leaf} alt="" />
          <div className="sub-header">Welcome to Nature</div>
          We provide a variety of range of items ranging from home-made crops as
          well as the finest and freshest ingredients.
        </div>
      </center>
      <div className="cards">
        <img src={OrganicFoodWhite} alt="" className="cards-item" />
        <img src={OrganicFoodBlue} alt="" className="cards-item" />
        <img src={OrganicFoodWhite} alt="" className="cards-item" />
        <img src={OrganicFoodWhite} alt="" className="cards-item" />
      </div>
    </div>
  );
};

export default WelcomeToNature;
