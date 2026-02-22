import { motion } from "motion/react";
import { cn } from "../lib/utils";

const ProjectsHeading = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <h2 className={cn(className,"max-w-lg pt-4 text-sm font-normal text-neutral-500 md:text-sm")}>
      {children.split(" ").map((char, index) => (
        <motion.span
          initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + index * 0.05,
            duration: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="inline-block"
          key={index}
        >
          {char}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};

export default ProjectsHeading;
