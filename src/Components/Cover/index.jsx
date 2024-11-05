import React from "react";
import "./style.css";
import cov_img from "../../Images/R6IM5519 (2).png";
import { Link } from "react-router-dom";
export default function Cover() {
  return (
    <div className="row cover align-items-center">
      <div className="col-md-6">
        <div className="cover-image">
          <img src={cov_img} alt="Muhammed Saeed frontend developer" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="cover-content">
          <h1>
            Hi, I'm <br />
            <span>Muhammed Saeed</span>
          </h1>
          <h2 className="h5 pb-3">Frontend Developer | React Web Developer</h2>
          <p>
            I'm passionate about turning ideas into beautiful, responsive
            websites and web applications. With a strong foundation in HTML,
            CSS, JavaScript, and modern frameworks like React, I specialize in
            building interfaces that are not only visually appealing but also
            intuitive and user-friendly.
          </p>
          <Link
            className="btn hire-button"
            to="mailto:muhammedsaeed253@gmail.com?subject=#&body=#"
          >
            Hire Me <i class="fa-solid fa-paper-plane"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
