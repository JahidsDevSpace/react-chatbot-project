import { useState } from "react";
import HideImage from '../assets/hide.png';
import VisibleImage from '../assets/visible.png';
import './LoginForm.css';


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
    <>
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
      <button className="login-btn">Login</button>
      <button className="login-btn">Sign Up</button>
    </>
  );
}
