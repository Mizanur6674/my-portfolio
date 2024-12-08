/* eslint-disable react/no-unescaped-entities */

import CurrentTimeLineExp from "../contents/CurrentTimeLineExp";
import TitleSectionPageContainer from "../../../utils/TitleSectionPageContainer";
import ProcessWork from "../contents/ProcessWork";
import { AboutMeDetails } from "../contents/AboutMe";
import { MySkills } from "../contents/my-skills";

const AboutSection = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />
        <AboutMeDetails />
        <CurrentTimeLineExp />
        <MySkills />
        <ProcessWork />
      </div>
    </div>
  );
};

export default AboutSection;
