import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="container-fluid contact py-5">
        <div className="row" id="contact">
          <div className="col-md-6 ps-5 contact-me">
            <h2 className="mb-4 position-relative cntc">Contact Me</h2>
            <a
              href="mailto:muhammedsaeed253@gmail.com?subject=#&body=#"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>{" "}
              muhammedsaeed253@gmail.com
            </a>
            <br />
            <a
              href="www.linkedin.com/in/mohamedsaeed325"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i> linkedin/mohamedsaeed325
            </a>
            <p>
              <i className="fa-solid fa-phone"></i> +02 01017989513
            </p>
          </div>
          <div className="col-md-6 pe-5 message">
            <h2 className="mb-4 position-relative msg">Message Me</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="Muhammed Saeed"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Your message."
                  rows="3"
                ></textarea>
              </div>
              <button className="btn send-button">Send</button>
            </form>
          </div>
          <div className="col-md-8 offset-md-2 made-by">
            <p>
              Made with{" "}
              <span>
                <i class="fa-solid fa-heart"></i>
              </span>{" "}
              By <Link to="/">Muhammedfolio</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
