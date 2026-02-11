import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Projects from "./Projects";
import Blog from "./Blog";

const HomePage = () => {
  return (
    <>
      <Heading>Jahid Hasan</Heading>
      <SubHeading>
        I'm a software engineer with a passion for building scalable and
        efficient systems. I'm currently working as a software engineer at
        Google.
      </SubHeading>
      <Projects />
      <Blog />
    </>
  );
};

export default HomePage;
