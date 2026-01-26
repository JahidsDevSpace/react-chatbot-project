import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import LanaDelRey from "../assets/lana-del-rey.jpeg";
import TheWeeknd from "../assets/the-weekend.png";
import ArcticMonkeys from "../assets/arctic-monkeys.png";
import Metallica from "../assets/metallica.png";
import LedZeppelin from "../assets/led-zeppllin.png";
import "./SpotifyCard.css";

const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

const SpotifyCard = () => {
  const [current, setCurrent] = useState(null);

  const ref = useOutsideClick(() => setCurrent(null));

  const cards = [
    {
      description: "Lana Del Rey",
      title: "Summertime Sadness",
      src: LanaDelRey,
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p className="content-p">
            Lana Del Rey, an iconic American singer-songwriter, is celebrated
            for her melancholic and cinematic music style. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit.
            <br />
            <br /> Id omnis eius iure nisi maxime, facilis quaerat vero hic
            distinctio sint ullam ipsam? Asperiores possimus ducimus doloremque
            ipsa tempore voluptate veniam?
          </p>
        );
      },
    },
    {
      description: "The Weeknd",
      title: "Blinding Lights",
      src: TheWeeknd,
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p className="content-p">
            The Weeknd, known for his sonic versatility and dark lyricism, has
            redefined modern R&B and pop music. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit.
            <br />
            <br />
            Necessitatibus magnam sit, reiciendis aut laboriosam delectus quasi
            inventore? Distinctio, sapiente! Voluptatibus dicta natus rem est ab
            vellit commodi officiis.
          </p>
        );
      },
    },
    {
      description: "Arctic Monkeys",
      title: "Do I Wanna Know?",
      src: ArcticMonkeys,
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p className="content-p">
            Arctic Monkeys are a cornerstone of British indie rock, famous for
            their sharp lyrics and infectious guitar riffs. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit.
            <br />
            <br />
            Harum, at! Atque, unde. Quae sed laudantium sapiente aspernatur
            delectus, vel obcaecati natus dolore aliquid iusto sit veritatis ab.
          </p>
        );
      },
    },
    {
      description: "Metallica",
      title: "For Whom the Bell Tolls",
      src: Metallica,
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p className="content-p">
            Metallica, pioneers of the thrash metal genre, are known for their
            fast tempos, instrumentals, and aggressive musicianship. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit.
            <br />
            <br />
            Necessitatibus magnam sit, reiciendis aut laboriosam delectus quasi
            inventore? Distinctio, sapiente! Voluptatibus dicta natus rem est ab
            vellit commodi officiis.
          </p>
        );
      },
    },
    {
      description: "Led Zeppelin",
      title: "Stairway to Heaven",
      src: LedZeppelin,
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p className="content-p">
            Led Zeppelin is widely considered one of the most influential rock
            groups in history, blending blues, folk, and heavy rock. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit.
            <br />
            <br />
            Harum, at! Atque, unde. Quae sed laudantium sapiente aspernatur
            delectus, vel obcaecati natus dolore aliquid iusto sit veritatis ab.
          </p>
        );
      },
    },
  ];

  return (
    <div className="card-page">
      <title>Spotify Card</title>
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="blur-bg"
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="expanded-card"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="expanded-image"
          />

          <div className="expanded-description">
            <div className="expanded-des">
              <div className="card-description">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="card-title"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${current.title}`}
                  className="card-p"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.div>
                <Link
                  layoutId={`card-cta-${current.title}`}
                  to={current.ctaLink}
                  className="card-ctaText"
                >
                  {current.ctaText}
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="expanded-content"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="sp-card">
        {cards.map((card, index) => (
          <motion.button
            layoutId={`card-${card.title}`}
            key={index}
            className="card-content"
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(card);
            }}
          >
            <div className="card-1">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="card-image"
              />
              <div className="card-description">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="card-title"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${card.title}`}
                  className="card-p"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="card-ctaText"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default SpotifyCard;
