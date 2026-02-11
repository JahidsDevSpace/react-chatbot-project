import { useInView, motion } from "motion/react";
import { useRef } from "react";
import CheckIcon from "/circle-check.svg";
import { cn } from "../lib/utils";

type Data = {
  year: number;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

const TimeLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const data: Data[] = [
    {
      year: 2025,
      content: [
        {
          title: "Reached $20k with my VSCode fork.",
          description:
            "Reached the revenue milestone of $20k with my VSCode fork.",
        },
      ],
    },
    {
      year: 2024,
      content: [
        {
          title: "Launched Open Source UI Library",
          description:
            "Released a collection of reusable React components that gained 5k stars on GitHub.",
        },
      ],
    },
    {
      year: 2023,
      content: [
        {
          title: "Senior Software Engineer at TechFlow",
          description:
            "Promoted to Senior role, leading the frontend architecture for enterprise-level dashboards.",
        },
      ],
    },
    {
      year: 2022,
      content: [
        {
          title: "Speaker at React Conf",
          description:
            "Gave a talk about performance optimization in large-scale TypeScript applications.",
        },
      ],
    },
    {
      year: 2021,
      content: [
        {
          title: "Started Freelancing Journey",
          description:
            "Worked with international clients to build high-performance web applications.",
        },
      ],
    },
    {
      year: 2020,
      content: [
        {
          title: "Graduated in Computer Science",
          description:
            "Completed my Bachelors degree with a focus on Software Engineering.",
        },
      ],
    },
  ];
  return (
    <div ref={ref} className="py-8">
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          <motion.h2
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * index,
            }}
            className="shadow-aceternity rounded-md w-fit px-2 py-0.5 mb-2 text-sm font-bold text-black"
          >
            {item.year}
          </motion.h2>

          <div className="flex flex-col gap-4">
            {item.content.map((content, indx) => (
              <div key={indx} className="pl-4">
                <Step isInView={isInView} indx={indx}>
                  <motion.h3
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * indx,
                    }}
                    className="text-neutral-600"
                  >
                    {content.title}
                  </motion.h3>
                </Step>
                {content.description && (
                  <motion.p
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.3 * indx,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-400"
                  >
                    {content.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  className,
  children,
  isInView,
  indx,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  indx: number;
}) => {
  return (
    <motion.div
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -10 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * indx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <img
        src={CheckIcon}
        alt="Check"
        className="mt-1 h-4 w-4 text-neutral-500"
      />
      {children}
    </motion.div>
  );
};

export default TimeLine;
