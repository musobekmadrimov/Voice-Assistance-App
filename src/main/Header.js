import React from "react";
import Typewriter from "typewriter-effect";
import logo from "./images/MM.png";

export default function Header() {
  return (
    <div className="header">
      <a
        href="https://musobekmadrimov.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <h4 className="navbarTitle">
        <Typewriter
          options={{
            strings: [
              "Voice Assistance App with React!",
              "developed by Musobek Madrimov!",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 80,
          }}
        />
      </h4>
    </div>
  );
}
