// import { gsap } from "gsap";
import React from "react";
import vector_img from "../images/vector_img.svg";
const gsap = window.gsap;

const Home = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".hide .text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo(".nav-links", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo("main", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  });

  document.addEventListener("DOMContentLoaded", function () {
    let svgImg = document.querySelector(".home-container img");
    let mouseCursor = document.querySelector(".cursor");

    svgImg.addEventListener("mouseover", () => {
      mouseCursor.classList.add("backdrop-filter");
    });

    svgImg.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("backdrop-filter");
    });
  });

  return (
    <div className="home-container">
      <main>
        <p>
          I am a photographer based in Hyderabad, India. I click, capture and
          edit. I picked up photography as a hobby and have stuck with it ever
          since.
        </p>
        <div>
          <img src={vector_img} className="vector_img" alt="vector_img" />
        </div>
      </main>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Hello </span>
          </h1>
          <h1 className="hide">
            <span className="text">I am</span>
          </h1>
          <h1 className="hide">
            <span className="text">Dave Deol</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>
    </div>
  );
};

export default Home;
