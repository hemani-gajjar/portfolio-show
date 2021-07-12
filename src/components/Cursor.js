import React from "react";

function Cursor() {
  document.addEventListener("DOMContentLoaded", function () {
    let mouseCursor = document.querySelector(".cursor");

    // console.log(mouseCursor);

    // homeBird.addEventListener("mouseover", () => {
    //   mouseCursor.classList.add("backdrop-filter");
    // });
    // homeBird.addEventListener("mouseleave", () => {
    //   mouseCursor.classList.remove("backdrop-filter");
    // });

    function cursorFunction(e) {
      mouseCursor.style.top = e.pageY + "px";
      mouseCursor.style.left = e.pageX + "px";
    }

    window.addEventListener("mousemove", cursorFunction);
  });
  return <div className="cursor"></div>;
}

export default Cursor;
