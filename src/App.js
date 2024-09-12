import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import EducationExperience from "./Components/EducationExperience";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="eduexp">
          <EducationExperience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
