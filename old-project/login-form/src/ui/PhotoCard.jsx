import { useMotionTemplate, useMotionValueEvent, useScroll, useSpring, useTransform} from "motion/react";
import { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { IconRocket } from "@tabler/icons-react";
import Car from "../assets/car-1.jpg";
import Art from "../assets/art.jpeg";
import "./PhotoCard.css";

const PhotoCard = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#888282", "#313503", "#05291c"];

  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });

  const features = [
    {
      icon: (
        <IconRocket height="2rem" width="2rem" color="rgb(229, 229, 229)" />
      ),
      title: "Generate ultra realistic images in seconds",
      description:
        "Leverage the power of AI to generate ultra realistic images in no time at all.",
      content: (
        <div>
          <img
            src={Car}
            alt="car"
            height={300}
            width={300}
            style={{ borderRadius: "0.5rem" }}
          />
        </div>
      ),
    },
    {
      icon: (
        <IconRocket height="2rem" width="2rem" color="rgb(229, 229, 229)" />
      ),
      title: "Replicate great Art",
      description:
        "Easily generate the painting of renowned artists, Van Gogh, Picasso, and more.",
      content: (
        <div>
          <img
            src={Art}
            alt="art"
            height={300}
            width={300}
            style={{ borderRadius: "0.5rem" }}
          />
        </div>
      ),
    },
    {
      icon: (
        <IconRocket height="2rem" width="2rem" color="rgb(229, 229, 229)" />
      ),
      title: "Batch generate images with a single click",
      description:
        "Create multiple images at once, saving you time and effort.",
      content: (
        <div className="content-div">
          <div className="image-div">
            <img
              src={Car}
              alt="car"
              height={300}
              width={300}
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
          <div className="image-div2">
            <img
              src={Art}
              alt="art"
              height={300}
              width={300}
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      animate={{ background }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="photo-card-page"
    >
      <div className="photo-card">
        {features.map((feature, index) => (
          <Card key={index} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ feature, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    { stiffness: 100, damping: 30, mass: 1 },
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div ref={ref} key={index} className="feature-card">
      <motion.div
        style={{ filter: useMotionTemplate`blur(${blur}px)`, scale }}
        className="feature-content"
      >
        {feature.icon}
        <h2 className="feature-title">{feature.title}</h2>
        <p className="feature-description">{feature.description}</p>
      </motion.div>
      <motion.div style={{ y: translateContent, opacity: opacityContent }}>
        {feature.content}
      </motion.div>
    </div>
  );
};

export default PhotoCard;
