import React, { useContext } from "react";
import "./signup.css";
import "./signupdark.css"
import { themeCreateContext } from "../../App";

const SignUp = () => {

  const {theme, toggleTheme} = useContext(themeCreateContext);

  return (
    <div className={`sign-up ${theme}`}>
      <div className="content">
        <div className="title">
          <h2>Sign Up {theme}</h2>
        </div>
        <div className="body">
          <input type="text" className="username" placeholder="Username" />
          <input type="password" className="username" placeholder="Password" />
        </div>

        <div className="btn">
          <button>SignIn</button>
          <button>Login</button>
        </div>

        <div className="forget-password">
          <a href="../../App.js">Forget Password</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
