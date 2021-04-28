import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GedditDone from "./components/pages/GedditDone";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Nav />
      <Hero />
      <Intro />
      <div>
      <Portfolio />
      <Route exact path="/gedditdone" component={GedditDone} />
      </div>
      <Contact />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
