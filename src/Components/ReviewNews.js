import React from "react";
import "./ReviewNews.css";
import Woman from "../asset/woman.png";
import Quote from "../asset/Group 86.png";
import { AiOutlineStar } from "react-icons/ai";

const ReviewNews = () => {
  return (
    <div>
      <center>
        <div className="review">
          <img src={Quote} alt="" style={{ margin: "2% 0 2%" }} />
          <div>
            <img src={Woman} alt="" className="user" />
          </div>
          <div className="name">Jane Doe</div>
          <AiOutlineStar color="#00dbd0" />
          <AiOutlineStar color="#00dbd0" />
          <AiOutlineStar color="#00dbd0" />
          <AiOutlineStar color="#00dbd0" />
          <AiOutlineStar color="#00dbd0" />
          <div className="comment">
            Thank you for the amazing produce and products you deliver each
            week... you make my life so easy and bring goodness into our family
            eating.absI've veen roasting a lot of brussel sprouts and goodness
            into our family eating.absI've veen roasting a lot of brussel
            sprouts and
          </div>
        </div>
      </center>
      <center>
        <div className="subscribe">
          <div className="sub-header">Subscribe to Our Newsletter</div>
          Sanctus dolore accusam dolores justo et voluptua, stet diam ut sit
          aliquyam et amet eirmod. Et ipsum diam dolores et,
          <div className="email">
            <input
              type="text"
              placeholder="Enter your email ID"
              className="input-text"
            />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default ReviewNews;
