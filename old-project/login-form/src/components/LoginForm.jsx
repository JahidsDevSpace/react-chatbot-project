import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import HideImage from "../assets/hide.png";
import VisibleImage from "../assets/visible.png";
import "./LoginForm.css";

export function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function toggleShowPassword() {
    if (isPasswordVisible) {
      setIsPasswordVisible(false);
    } else {
      setIsPasswordVisible(true);
    }
  }

  return (
    <div className="login-page">
      <motion.div
        initial={{ y: "-10vw", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            default: { type: "spring" },
            opacity: { ease: "linear" },
          },
        }}
        className="login-form"
      >
        <p className="title">Fill up the form below!</p>
        <div>
          <input placeholder="Email" type="text" className="login-input" />
        </div>
        <div>
          <input
            placeholder="Password"
            type={isPasswordVisible ? "text" : "password"}
            className="login-input"
          />

          <button onClick={toggleShowPassword} className="show-btn">
            {isPasswordVisible ? (
              <img src={HideImage} width="15" />
            ) : (
              <img src={VisibleImage} width="15" />
            )}
          </button>
        </div>
        <div className="login-btn-container">
          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
            className="login-btn"
          >
            Login
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="login-btn">
            Sign Up
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
