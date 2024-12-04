import React from "react";
import { Hero } from "../contents/hero";
import CurrentFavTech from "../contents/CurrentFavTech";
import AboutMe from "../contents/AboutMe";
import CurrentTimeLineExp from "../contents/CurrentTimeLineExp";
import FavProjects from "../contents/FavProjects";
import { MySkills } from "../contents/my-skills";
import ContactMe from "../contents/ContactMe";

export const HomeSection = () => {
  return (
    <div className="container">
      <Hero />
      <CurrentFavTech />
      <div className="w-full flex flex-col items-start">
        <AboutMe />
        <CurrentTimeLineExp />
        <FavProjects />
        <MySkills />
        <ContactMe />
      </div>
    </div>
  );
};
