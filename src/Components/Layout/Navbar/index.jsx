import React from "react";
import "./style.css";
import logo from "../../../Images/coding-page.png";

import { Link } from "react-router-dom";

export default function Navbar() {
  function showNav() {
    const toggle = document.querySelector(".toggle");
    toggle.style.left = "0";
    const menuBar = document.querySelector(".menu-bar");
    menuBar.style.display = "none ";
    const closeBar = document.querySelector(".close");
    closeBar.style.display = "inline-block ";
    const nav = document.querySelector("nav");
    nav.style.background = "black";
  }

  function closeNav() {
    const toggle = document.querySelector(".toggle");
    toggle.style.left = "-100%";
    const closeBar = document.querySelector(".close");
    closeBar.style.display = "none";
    const menuBar = document.querySelector(".menu-bar");
    menuBar.style.display = "inline-block";
  }

  return (
    <nav className="position-fixed w-100">
      <div className="row navbar p-0">
        <div className="col-md-3 col-sm-5 pe-0">
          <div className="logo d-flex align-items-center h-100">
            <img src={logo} alt="logo" />
            <Link to="/">
              <span>MuhamedFolio</span>
            </Link>
          </div>
        </div>
        <div className="col-md-7 col-sm-2">
          <div className="menu d-flex align-items-center h-100">
            <ul className="toggle d-flex w-100 justify-content-center m-0 p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
              {/* <li>
                <Link to="/">Contact</Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-5 ps-0">
          <div className="icons d-flex align-items-center w-100 h-100">
            <ul className="d-flex w-100 justify-content-end m-0 ps-0">
              <input type="checkbox" id="show-toggle" />
              <li>
                <label onClick={showNav} htmlFor="show-toggle">
                  <i className="fa-solid fa-bars menu-bar ps-0"></i>
                </label>
              </li>
              <input type="checkbox" id="close-toggle" />
              <li>
                <label onClick={closeNav} htmlFor="close-toggle">
                  <i className="fa-solid fa-xmark close ps-0"></i>
                </label>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mohamedsaeed325"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin linkin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mohamedsaeed253"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.hackerrank.com/profile/muhammedsaeed253"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-hackerrank hackrank"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
