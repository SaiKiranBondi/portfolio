import React from "react";
import "../styles/Hero.css";
import data from "../data";

function Hero() {
  const { name, tagline, intro, profileImage, resume, github, linkedin } =
    data.hero;
  return (
    <section className="hero">
      <div className="hero-content-wrapper">
        <img src={process.env.PUBLIC_URL + profileImage} alt="Profile" className="hero-img" />
        <h1>{name}</h1>
        <h2>{tagline}</h2>
        <p>{intro}</p>
        <div className="hero-links">
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
