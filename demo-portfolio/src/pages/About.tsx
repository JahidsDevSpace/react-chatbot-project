import TimeLine from "../components/TimeLine";
import { Collage } from "../components/Collage";
import Container from "../components/Container";

const About = () => {
  return (
    <div className="flex min-h-screen items-center justify-start">
      <Container className="min-h-[200vh] p-4 pt-4 md:pt-4 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          About Me
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I am a software engineer based in Dhaka, Bangladesh, with a deep
          interest in building modern web applications. My journey in tech
          started with a curiosity for how things work on the internet, which
          led me to master React, TypeScript, and various front-end
          technologies.
        </p>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I love to travel and explore new places. I am a big fan of nature and
          adventures.
        </p>
        <Collage />
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          Here's a time line about my life achievements.
        </p>
        <TimeLine />
      </Container>
    </div>
  );
}

export default About