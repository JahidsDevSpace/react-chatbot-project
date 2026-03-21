import { motion } from "motion/react";
import { cn } from "../lib/utils";

const SectionHeading = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        className,
        "text-secondary relative mt-4 w-fit max-w-lg px-4 text-sm font-normal md:text-sm dark:text-neutral-300",
      )}
    >
      <Background />
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

const Background = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
      className="absolute mx-4 inset-0 h-full scale-[1.04] bg-neutral-100 dark:bg-neutral-800"
    >
      <div className="absolute animate-pulse -top-px -left-px h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-600"></div>
      <div className="absolute animate-pulse -top-px -right-px h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-600"></div>
      <div className="absolute animate-pulse -bottom-px -left-px h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-600"></div>
      <div className="absolute animate-pulse -right-px -bottom-px h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-600"></div>
    </motion.div>
  );
};

export default SectionHeading;
