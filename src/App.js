import "./App.css";
import React from "react";
import Navebar from "./components/Navebar.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Education from "./components/Education.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <>
      <Navebar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default App;
