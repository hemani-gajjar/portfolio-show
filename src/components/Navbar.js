import React from "react";

const Navbar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(
      ".navbar-container .nav-links li a"
    );

    let mouseCursor = document.querySelector(".cursor");

    // console.log(navLinks);

    navLinks.forEach(function (link) {
      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
      });
      link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
      });
    });
  });

  return (
    <div className="navbar-container">
      <div className="navbar">
        <h1>
          <i className="fa fa-camera-retro"></i>
        </h1>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Clicks</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
