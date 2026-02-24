import TimeLine from "../components/TimeLine";
import { Collage } from "../components/Collage";
import Container from "../components/Container";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

const About = () => {
  return (
    <div className="flex min-h-screen items-center justify-start">
      <Container className="min-h-screen md:pb-10">
        <Heading>About Me</Heading>
        <SubHeading>
          I am a software engineer based in Dhaka, Bangladesh, with a deep
          interest in building modern web applications. My journey in tech
          started with a curiosity for how things work on the internet, which
          led me to master React, TypeScript, and various front-end
          technologies.
        </SubHeading>
        <SubHeading>
          I love to travel and explore new places. I am a big fan of nature and
          adventures.
        </SubHeading>
        <Collage />
        <SubHeading>Here's a time line about my life achievements.</SubHeading>
        <TimeLine />
      </Container>
    </div>
  );
};

export default About;
