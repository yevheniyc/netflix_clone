import React, { useEffect, useState } from "react";
import netflixSmiley from "./netflix_smiley.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  // attach a listner to the scrolling
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, [handleShow]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img src={netflixSmiley} alt="Netflix Avatar" className="nav__avatar" />
    </div>
  );
}

export default Nav;
