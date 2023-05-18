import React from "react";
import { useState } from "react";
import Styles from "./Login.module.css";
import { BiUser } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import VectaryIcon from "../../svgs/Vectary texture (1).svg";
import { Link } from "react-router-dom";
const Login = () => {
  const [visible, setIsVisible] = useState(false);
  const viewPassword = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <div className={Styles.LoginSection}>
      <div className={Styles.Container}>
        <div className={Styles.Left}>
          <Link to="/" className={Styles.Logo}>Quest</Link>
          <div className={Styles.LoginForm}>
            <div className={Styles.FormHeader}>
              <h2>
                {/* <a href="/sign-up" className={Styles.accountHeader}> */}
                {/* </a> */}
                Login into your account
                <small className={Styles.fullStop}>.</small>
              </h2>
              <p className={Styles.SignInLink}>
                Don't have an Account? <Link to="/sign-up">Register</Link>
              </p>
            </div>
            <form className={Styles.formGroup}>
              <div className={Styles.InputGroup}>
                <label htmlFor="email">Email</label>
                <div className={Styles.Input}>
                  <input
                    id="email"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                  <BiUser className={Styles.Icon} />
                </div>
              </div>
              <div className={Styles.InputGroup}>
                <label htmlFor="password">Password</label>
                <div className={Styles.Input}>
                  <input
                    id="password"
                    type={visible ? "text" : "password"}
                    placeholder="Enter Your Password"
                  />
                  {visible ? (
                    <AiOutlineEye
                      onClick={viewPassword}
                      className={Styles.Icon}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={viewPassword}
                      className={Styles.Icon}
                    />
                  )}
                </div>
              </div>
              <button className={Styles.LoginBtn} type="submit">
                Login
              </button>
            </form>
            <div className={Styles.line}></div>
          </div>
        </div>
        <div className={Styles.Right}>
          <img className={Styles.VectaryIcon} src={VectaryIcon} alt="" />
          <h1>Knowledge Management</h1>
          <h2> Management Platform</h2>
          <p>
            Create question bank and answer questions relating to your
            company/business with no stress.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
