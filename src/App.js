import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import Projects from "./components/pages/Projects/Projects";
import Resume from "./components/pages/Resume/Resume";
import Contact from "./components/pages/Contact/Contact";
import AboutMe from "./components/pages/About Me/AboutMe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about-me" exact component={AboutMe} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
