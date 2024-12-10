/* eslint-disable react/no-unescaped-entities */
import AnimationContainer from "@/utils/AnimationContainer";
import React from "react";
import { skills } from "../data/data";
import ShowSkills from "@/utils/ShowSkills";
import { calculateDuration } from "./CurrentTimeLineExp";

export const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
      <h5 className="font-bold tracking-tight mb-2 text-white text-start">
        Skills
      </h5>

      <p>
        A look at all the programming languages, libraries, and tools I've
        worked with, I started programming about +
        {calculateDuration("2021-05-01", false)} ago. I have tried a few
        programming languages and technology stack, both Backend and Frontend.
      </p>

      <p>
        Event though the scope of web development is wide, I was very interested
        and focused on Frontend development.
      </p>

      <div className="flex flex-col items-start gap-3 mt-3">
        {skills.map(({ title, techs }) => (
          <div key={title}>
            <h6 className="font-bold tracking-tight mb-5 text-white text-start">
              {title}
            </h6>

            <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
              <ShowSkills skills={techs} />
            </AnimationContainer>
          </div>
        ))}
      </div>
    </AnimationContainer>
  );
};
