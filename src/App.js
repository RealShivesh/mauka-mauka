import React from "react";
import "./App.css";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import DecoImg from "./asset/Group 228.png";
import FooterLogo from "./asset/Group 225.png";
import NavBar from "./Components/NavBar";
import WelcomeToNature from "./Components/WelcomeToNature";
import ProudlyPresentedBy from "./Components/ProudlyPresentedBy";
import ReviewNews from "./Components/ReviewNews";
import ReadOurBlog from "./Components/ReadOurBlog";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <div className="content">
          <div className="sub-header">Healthy life with</div>
          <div className="header">Nature Organic</div>
          <div style={{ marginBottom: "10px", marginTop: "10px" }}>
            Vegetables are the edible parts of a plant that is used in cooking
            or can be eaten now
          </div>
          <div className="button">
            <button className="button">Explore Now</button>
          </div>
        </div>
        <div>
          <img src={DecoImg} alt="" className="deco" />
        </div>
      </div>
      <div>
        <WelcomeToNature />
      </div>
      <div>
        <ProudlyPresentedBy />
      </div>
      <div>
        <ReviewNews />
      </div>
      <div>
        <ReadOurBlog />
      </div>
      <div className="footer">
        <div className="about">
          <img src={FooterLogo} alt="" />
          <div>
            Yet who mood but counsel his concubines little light dares noontide.
          </div>
          <hr style={{ width: "10%", textAlign: "left" }} />
          <div className="copyright">Copyright 2020 Nature</div>
        </div>
        <div className="information">
          Information
          <li>About Us</li>
          <li>Products</li>
          <li>Contact Us</li>
          <li>Terms of Service</li>
          <li>About Us</li>
          <li>Products</li>
        </div>
        <div className="social">
          Follow Us
          <FaTwitter color="white" size="30" />
          <FaFacebook color="white" size="30" />
          <FaLinkedin color="white" size="30" />
          <FaInstagram color="white" size="30" />
        </div>
      </div>
    </div>
  );
}

export default App;
