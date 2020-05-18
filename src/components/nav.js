import React, { Fragment } from "react";
import logo from "../img/logo192.png";
import "../style/home.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";
import Pricing from "../components/pricing";
import Projects from "../components/projects";
import Services from "../components/services";

const Nav = () => {
  return (
    <Fragment>
      <Router >
      <div className="wrapper">
      <div className="header">
        <div className="navbar">
          <Link to="/html-css-into-react-app" className="logo">
           
            <img className="logoReact" src={logo} alt="" />
          </Link>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/html-css-into-react-app" className="navBar__item">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="navBar__item">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="navBar__item">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="navBar__item">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="navBar__item">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="navBar__item">
                Contact
              </Link>
            </li>
            <li className="nav-item nav-num">
              <a href="#" className="navBar__item  nav-number">
                <i className="fas fa-headphones"></i>47-377-9900
              </a>
            </li>
            <li className="nav-item nav-button">
              <a href="#" className="navBar__item nav-analysis">
                <span className="nav-anal">Free Analysis</span>
              </a>
            </li>
          </ul>

          <Switch>
            <Route exact path="/html-css-into-react-app/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>

        </div>

        </div>
      </Router>
    </Fragment>
  );
}

export default Nav;
