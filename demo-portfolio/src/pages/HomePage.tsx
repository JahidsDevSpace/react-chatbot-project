import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Projects from "./Projects";
import Blog from "./Blog";
import { projects } from "../constants/ProjectsData";
import Testimonial from "./Testimonial";

const HomePage = () => {
  return (
    <>
      <Heading>Jahid Hasan</Heading>
      <SubHeading>
        I'm a software engineer with a passion for building scalable and
        efficient systems. I'm currently working as a software engineer at
        Google.
      </SubHeading>
      <Projects projects={projects.slice(0, 3)} />
      <Blog limit={3} />
      <Testimonial />
    </>
  );
};

export default HomePage;
