import React from "react";

const Footer = () => {
  document.addEventListener("DOMContentLoaded", function () {
    let socialLinks = document.querySelectorAll(".footer-container a");
    let mouseCursor = document.querySelector(".cursor");

    socialLinks.forEach(function (link) {
      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("footer-animation");
      });
      link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("footer-animation");
      });
    });
  });

  return (
    <div className="footer-container">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-envelope"></i>
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github"></i>
      </a>

      <p>&#169; Dave Deol</p>
    </div>
  );
};

export default Footer;
