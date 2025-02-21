import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Experience from "./components/home/Experience";

const Home = React.forwardRef(({ aboutMeRef }, ref) => {
  const jumbotronRef = React.useRef();

  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
        jumbotronRef={jumbotronRef}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
          aboutMeRef={aboutMeRef}
        />
      )}
      {experiences.show && <Experience experiences={experiences} />}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
    </>
  );
});

const App = () => {
  const mainBodyRef = React.useRef();
  const jumbotronRef = React.useRef();
  const aboutMeRef = React.useRef();

  return (
    <BrowserRouter basename="home">
      {navBar.show && (
        <Navbar
          mainBodyRef={mainBodyRef}
          jumbotronRef={jumbotronRef}
          aboutMeRef={aboutMeRef}
        />
      )}
      <Routes>
        <Route
          path="/"
          exact
          element={<Home ref={mainBodyRef} aboutMeRef={aboutMeRef} />}
        />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
