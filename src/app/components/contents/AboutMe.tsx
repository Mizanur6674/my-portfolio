import AnimationContainer from "@/utils/AnimationContainer";
import { calculateDuration } from "./CurrentTimeLineExp";

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full my-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        I am Md Mizanur Rahman, a dedicated and detail-oriented Frontend Web
        Developer with +{calculateDuration("2022-03-10", false)} of professional
        experience in creating dynamic and responsive user interfaces. I
        specialize in modern web technologies, including HTML, CSS, Tailwindcss,
        Bootstrap, JavaScript, TypeScript, Node.js, React.js, and Next.js, to
        deliver seamless user experiences. Passionate about clean code and
        innovative solutions, I thrive in collaborative environments that
        prioritize efficiency and creativity.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
