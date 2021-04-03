import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import "../styles/NavBar2.css";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className="navbarcont"
      >
        <div onClick={() => scroll.scrollToTop()}>
          <ReactBootStrap.Navbar.Brand className="phoneLink">
            <FaPhone className="fa fa-phone" aria-hidden="true"></FaPhone> 0499
            388 227
          </ReactBootStrap.Navbar.Brand>
        </div>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link
              className="c-main__contact"
              smooth={true}
              duration={1000}
              to="about"
            >
              <ReactBootStrap.Nav.Link className="aboutLink">
                About Me
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link activeClass="activefocus" smooth={true} duration={1000} to="experience">
              <ReactBootStrap.Nav.Link >
                Experience
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link smooth={true} duration={1000} to="portfolio">
              {" "}
              <ReactBootStrap.Nav.Link>
                Portfolio
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link smooth={true} duration={1000} to="skills">
              <ReactBootStrap.Nav.Link>
                Skills
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav>
          <Link smooth={true} duration={1000} to="Mailme">
              <ReactBootStrap.Nav.Link>
                Mail Me
              </ReactBootStrap.Nav.Link>
            </Link>          

            <Link smooth={true} duration={1000} to="Footer">
              <ReactBootStrap.Nav.Link eventKey={2}>
                Contact Me
              </ReactBootStrap.Nav.Link>{" "}
            </Link>

     
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavBar;
