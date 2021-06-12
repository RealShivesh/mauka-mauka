import React from "react";
import Img1 from "../asset/Group 39.png";
import Img2 from "../asset/Group 64.png";
import Img3 from "../asset/Group 55.png";
import "./ProudlyPresentedBy.css";

const ProudlyPresentedBy = () => {
  return (
    <div className="presenters">
      <center>
        <div className="sub-header">Proudly presented by</div>
        <div style={{ width: "70%" }}>
          Ever holy delphis come steel stalked name which, thy moths ah not and
          did. Strength in gild was flee sorrow the but sooth ne, aught awake
          lines mother had. Atonement save befell that and delight mote is, her
          not of.
        </div>
      </center>

      <div className="cards">
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img2} alt="" />
        <img src={Img1} alt="" />
      </div>
    </div>
  );
};

export default ProudlyPresentedBy;
