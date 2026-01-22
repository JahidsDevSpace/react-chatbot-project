import Logo from "../assets/clerk.png";
import { Icon360View, IconComponents, IconMail, IconMan, IconPlus, IconX } from "@tabler/icons-react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import "./Card.css";

const Card = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="card-page"
          >
            <div className="card">
              <h2 className="card-title">Acertinity UI Components</h2>
              <p className="card-content">
                Collection of beautiful UI component, let's get on with it!
              </p>

              <div className="card-footer">
                <button onClick={() => setOpen(false)} className="card-button">
                  <img src={Logo} className="logo" width={10} height={10} />
                  Clerk <IconX height={15} width={15} color="#979595" />{" "}
                </button>
              </div>

              <div className="card-details">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                  whileHover={{ opacity: 1, scale: 1.01, filter: "blur(0px)" }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    mass: 0.5,
                  }}
                  className="hover-details"
                >
                  <div className="components">
                    <div className="icon-message">
                      <IconMan height={19} width={19} color="#525252" />
                    </div>
                    <div className="text-content">
                      <p className="text-title">BitebyBite Company</p>
                      <p className="text-subtitle">Mr. CEO</p>
                    </div>
                  </div>
                  <div className="components">
                    <div className="icon-message">
                      <IconComponents height={19} width={19} color="#525252" />
                    </div>
                    <div className="text-content">
                      <p className="text-title">Dunder Muffin</p>
                      <p className="text-subtitle">
                        Asst (to the) Regional Manager
                      </p>
                    </div>
                  </div>
                  <div className="components">
                    <div className="icon-message">
                      <Icon360View height={19} width={19} color="#525252" />
                    </div>
                    <div className="text-content">
                      <p className="text-title">360 days all around</p>
                      <p className="text-subtitle">
                        We are here to help you anytime.
                      </p>
                    </div>
                  </div>
                  <div className="components">
                    <div className="icon-message">
                      <IconMail height={19} width={19} color="#525252" />
                    </div>
                    <div className="text-content">
                      <p className="text-title">Contact services</p>
                      <p className="text-subtitle">
                        We provide 24/7 customer support.
                      </p>
                    </div>
                  </div>
                  <div className="components">
                    <div className="icon-message">
                      <IconPlus height={19} width={19} color="#525252" />
                    </div>
                    <div className="text-content">
                      <p className="text-subtitle">Create project</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
