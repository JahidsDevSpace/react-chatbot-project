// eslint-disable-next-line no-unused-vars
import { motion, useAnimate } from "motion/react";
import "./AnimationSequences.css";

const AnimationSequences = () => {
  const [scope, animate] = useAnimate();

  const sequence = [
    [".loader", { opacity: [0, 1], width: "2rem" }, { duration: 0.1 }],
    [".loader", { rotate: 360 * 4 }, { duration: 1 }],
    [".loader", { opacity: [1, 0], scale: 0 }, { duration: 0.1, at: "-0.6" }],
    [".text", { display: "none" }, { duration: 0.1, at: "-0.5" }],
    ["button", { width: "5rem", borderRadius: "1000px" }, { duration: 0.3 }],
    [
      "button",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
        backgroundImage: "linear-gradient(to right, #00ff99, #00ccff",
      },
      { duration: 0.8 },
    ],
    [
      "button",
      { backgroundImage: "linear-gradient(to right, #00ff99, #00ccff" },
      { duration: 0.8 },
    ],
    [".check-icon", { opacity: [0, 1] }, { duration: 0.1, at: "-1.4" }],
    [
      ".check-icon path",
      { pathLength: 1 },
      { duration: 0.3, type: "tween", ease: "easeInOut" },
    ],
  ];

  const startAnimating = async () => {
    animate(sequence);
  };

  return (
    <div className="animation-seq-page">
      <div ref={scope} className="animated-seq-content">
        <motion.button
          onClick={startAnimating}
          style={{ width: "30rem" }}
          className="animated-seq-btn"
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="loader"
            initial={{ width: "0rem" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
          </motion.svg>
          <span className="text">Purchase Now ($169)</span>
        </motion.button>

        <motion.svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFFFFF"
          strokeWidth={3}
          className="check-icon"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default AnimationSequences;
