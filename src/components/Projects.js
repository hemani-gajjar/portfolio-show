import React from "react";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";

const Projects = () => {
  document.addEventListener("DOMContentLoaded", function () {
    let projectCards = document.querySelectorAll(".project-grid a");
    let mouseCursor = document.querySelector(".cursor");

    projectCards.forEach(function (link) {
      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("project-animation");
      });
      link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("project-animation");
      });
    });
  });

  return (
    <div className="project-container">
      <div>
        <h2>Check out some of my pictures</h2>
      </div>

      <div className="project-grid">
        <img src={pic1} alt="bird-svg" />

        <img src={pic2} alt="bird-svg2" />

        <img src={pic3} alt="bird-svg" />

        <br />
      </div>
    </div>
  );
};

export default Projects;
