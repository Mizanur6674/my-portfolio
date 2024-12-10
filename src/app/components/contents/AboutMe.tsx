import AnimationContainer from "@/utils/AnimationContainer";
import { calculateDuration } from "./CurrentTimeLineExp";

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full my-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        I am Md Mizanur Rahman, a dedicated and detail-oriented Frontend
        Developer with over +{calculateDuration("2022-03-10", false)} of
        professional experience in creating dynamic and responsive user
        interfaces. I specialize in modern web technologies, including HTML,
        CSS, Tailwindcss, Bootstrap, JavaScript, TypeScript, Node.js, React.js,
        and Next.js, to deliver seamless user experiences. Passionate about
        clean code and innovative solutions, I thrive in collaborative
        environments that prioritize efficiency and creativity.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;

export const AboutMeDetails = () => {
  return (
    <AnimationContainer customClassName="w-full my-16">
      <p className="text-base">
        I am Md Mizanur Rahman, a dedicated and skilled Frontend Developer with
        over +{calculateDuration("2022-10-03", false)} of experience in building
        responsive, user-centric web applications. My expertise lies in
        utilizing modern technologies like React.js, Next.js, HTML5, CSS3,
        JavaScript, and Tailwind CSS to create seamless and visually appealing
        web interfaces. With a strong focus on performance optimization,
        accessibility, and SEO best practices, I deliver solutions that enhance
        user experiences and meet the highest standards of quality.
      </p>

      <p className="text-base">
        Throughout my career, I have successfully translated complex design
        concepts into functional, interactive web applications. My collaborative
        approach enables me to work closely with designers and developers to
        ensure alignment between design vision and technical execution. I have
        also demonstrated my ability to optimize web performance using
        server-side rendering (SSR) and static site generation (SSG), ensuring
        that the applications I develop are not only visually stunning but also
        highly efficient.
      </p>

      <p className="text-base">
        Passionate about continuous learning, I stay updated on the latest
        frontend technologies and trends to bring innovation to my work. I take
        pride in writing clean, maintainable code and creating scalable
        solutions that align with both business goals and user needs. My
        commitment to excellence and my enthusiasm for solving complex problems
        make me a valuable addition to any team focused on building cutting-edge
        digital experiences.
      </p>
    </AnimationContainer>
  );
};
