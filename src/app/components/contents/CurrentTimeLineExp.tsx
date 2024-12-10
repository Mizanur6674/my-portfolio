import { Timeline, TimelineEvent } from "./TimeLineExp";

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return "1 year";
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <h6 className="text-white">Frontend Developer</h6>

          {/* | Mar. 2023 - {calculateDuration("2023-03-01", true)} */}
          <p>KLwebco | March 2022 – Present</p>
          <p className="text-sm italic text-primary">
            Huntington Station, New York 11746, USA
          </p>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          As a Frontend Developer at KLwebco, I have worked on building
          responsive and interactive web applications using React.js and
          Next.js. My responsibilities include translating complex design
          concepts into pixel-perfect, mobile-first web interfaces using HTML5,
          CSS3, JavaScript, and Tailwind CSS. I have optimized web performance
          through server-side rendering (SSR) and static site generation (SSG),
          ensuring seamless user experiences. I prioritize cross-browser
          compatibility and adhere to accessibility standards and SEO best
          practices. Collaborating closely with designers and development teams,
          I have delivered high-quality, scalable solutions while maintaining
          clean, version-controlled codebases using Git and Bitbucket. I am
          committed to staying updated with the latest frontend technologies to
          enhance project outcomes and drive innovation.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <p className="text-white">Freelance | Feb. 2021 - Mar. 2022</p>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and development of web pages applying agile methodologies,
          clean architecture, SOLID principles and pixel perfect in all
          projects, I have developed almost all types of projects from Landing
          pages, stores, blogs and dashboards.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          <p className="text-white">Studio Iluxion | jan. 2021 - Feb. 2022</p>
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer on projects using Figma,
          HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing
          SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
