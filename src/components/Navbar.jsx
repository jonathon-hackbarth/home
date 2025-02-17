import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef(({ aboutMeRef }, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const navbarMenuRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.top < 0) {
          setIsTop(false);
        } else {
          setIsTop(true);
        }
      },
      {
        threshold: [0],
        rootMargin: "0px 0px -100% 0px" // Adjust this value as needed
      }
    );

    const aboutMeCurrent = aboutMeRef.current;

    if (aboutMeCurrent) {
      observer.observe(aboutMeCurrent);
    }

    return () => {
      if (aboutMeCurrent) {
        observer.unobserve(aboutMeCurrent);
      }
    };
  }, [aboutMeRef]);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"}`}
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="toggler"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
              onClick={handleNavLinkClick}
            >
              About
            </NavLink>
          )}
          {repos.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#projects"}
              onClick={handleNavLinkClick}
            >
              Projects
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
            onClick={handleNavLinkClick}
          >
            Resume
          </NavLink>
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
              onClick={handleNavLinkClick}
            >
              Skills
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
