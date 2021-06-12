import React from "react";
import "./ReadOurBlog.css";
import Oil from "../asset/oil.png";
import Container from "../asset/container.png";
import LeafCont from "../asset/leaf.png";
import Leaf from "../asset/Group 114.png";

const ReadOurBlog = () => {
  return (
    <div>
      <center>
        <div className="blog-header">
          <img src={Leaf} alt="" />
          <div className="sub-header">Read Our Blog</div>
          'l non una udita nostra porgere temporali di, in udita intendo santo
          divina che pieno e fuor nel, allo tal.
        </div>
      </center>
      <div className="cardstack">
        <div className="blog-cards">
          <img src={Oil} alt="" className="card-img" />
          <div>
            <div className="blog-heading">Blog Post One</div>
            <div className="blog-content">
              Est eos eos lorem ipsum lorem voluptua sadipscing.
            </div>
          </div>
        </div>
        <div className="blog-cards">
          <img src={LeafCont} alt="" className="card-img" />
          <div>
            <div className="blog-heading">Blog Post One</div>
            <div className="blog-content">
              Est eos eos lorem ipsum lorem voluptua sadipscing.
            </div>
          </div>
        </div>
        <div className="blog-cards">
          <img src={Container} alt="" className="card-img" />
          <div>
            <div className="blog-heading">Blog Post One</div>
            <div className="blog-content">
              Est eos eos lorem ipsum lorem voluptua sadipscing.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadOurBlog;
