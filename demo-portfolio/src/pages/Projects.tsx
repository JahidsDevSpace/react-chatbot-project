import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "Macbook Mockup",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
      href: "#",
      description:
        "A mockup of a Mackbook that showcases the product and its features.",
    },
    {
      title: "Instant Feedback",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/wobble-card.png",
      href: "#",
      description:
        "An interactive feedback system that provides instant responses to user actions.",
    },
    {
      title: "Best Component",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/wavy-background.png",
      href: "#",
      description:
        "A visually stunning wavy background component designed to add depth and fluid motion to your hero sections.",
    },
    {
      title: "Authentic Steps",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/pro/shaders.webp",
      href: "#",
      description:
        "A high-performance shader-based component that creates complex, authentic visual patterns for modern web experiences.",
    },
  ];

  return (
    <div className="py-5 text-white">
      <Heading>Projects</Heading>
      <SubHeading>
        I love building web apps that can impact millions of lives.
      </SubHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            key={index}
            className="group relative"
          >
            <img
              src={project.src}
              alt={project.title}
              height={300}
              width={300}
              className="h-72 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02] group-hover:blur-[1px]"
            />
            <motion.div
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            >
              <div className="transform transition-transform duration-200">
                <h2 className="text-xl font-medium tracking-tight text-white dark:text-black">
                  {project.title}
                </h2>
                <p className="max-w-xs text-sm text-zinc-300 dark:text-black">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
