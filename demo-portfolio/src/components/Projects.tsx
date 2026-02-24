import { motion } from "motion/react";
import ProjectsHeading from "../components/ProjectsHeading";
import { type Project } from "../constants/ProjectsData";

const Projects = ({ projects = [] }: { projects?: Project[] }) => {
  return (
    <div className="shadow-section-inset my-4 border-y border-neutral-100 dark:border-neutral-800">
      <ProjectsHeading delay={0.2}>
        A lifetime in building projects.
      </ProjectsHeading>
      <div className="grid grid-cols-1 gap-4 px-4 py-4 md:grid-cols-3">
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
              className="h-56 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02] group-hover:blur-[1px]"
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
