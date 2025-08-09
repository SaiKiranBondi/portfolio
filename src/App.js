import React from "react";
import Hero from "./components/Hero";
import Slideshow from "./components/Slideshow"; // Import the Slideshow component
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Slideshow /> {/* Add the Slideshow component here */}
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;