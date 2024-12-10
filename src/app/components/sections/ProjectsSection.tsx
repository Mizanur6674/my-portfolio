import AnimationContainer from "@/utils/AnimationContainer";
import TitleSectionPageContainer from "@/utils/TitleSectionPageContainer";
import SearchAllProjects from "../contents/SearchAllProjects";

const myGithub = "https://github.com/Mizanur6674";

const ProjectsSection = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Projects" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base">
            These are most of the projects I&apos;ve done since I started
            programming, some of them are personal projects, freelance, work,
            practice or for other situation. If you want to see absolutely all
            my projects go to my{" "}
            <a
              href={myGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              github.com/Mizanur6674
            </a>
            .
          </p>
        </AnimationContainer>

        <SearchAllProjects />
      </div>
    </div>
  );
};

export default ProjectsSection;
