// eslint-disable-next-line no-unused-vars
import { useAnimate, motion, stagger } from "motion/react";
import { useEffect } from "react";
import "./AnimatedText.css";

const AnimatedText = () => {
  const [scope, animate] = useAnimate();
  const text =
    "Welcome to Fight Club. The first rule of Fight Club is that you don't talk about Fight Club. The second rule of Fight Club is that you don't talk about Fight Club. Every bruise is a badge of reality in an artificial world. ";

  useEffect(() => {
    startAnimating();
  }, []);  

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      },
    );
  };

  return (
    <div ref={scope} className="animated-page">
      <div className="animated-text">
        {text.split("").map((word, index) => (
          <motion.span
            key={word + index}
            style={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            className="text"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
