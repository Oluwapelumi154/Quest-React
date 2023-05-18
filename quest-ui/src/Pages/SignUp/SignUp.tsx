import React, { useState } from "react";
import Styles from "./SignUp.module.css";
import { BiUser } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import VectaryIcon from '../../svgs/Vectary texture (1).svg'
import { Link } from "react-router-dom";
const SignUp = () => {
  const [visible, setIsVisible] = useState(false);
  const viewPassword = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <div className={Styles.SignUpSection}>
      <div className={Styles.Container}>
        <div className={Styles.Left}>
          <Link to="/" className={Styles.Logo}>Quest</Link>
          <div className={Styles.SignUpForm}>
            <div className={Styles.FormHeader}>
              <p> Start for Free </p>
              <h2>
                <Link to="/sign-up" className={Styles.accountHeader}>
                  Create{" "}
                </Link>
                new account
                <small className={Styles.fullStop}>.</small>
              </h2>
              <p className={Styles.SignInLink}>
                Already have an Account? <a href="/sign-in">Log In</a>
              </p>
            </div>
            <form className={Styles.formGroup}>
              <div className={Styles.Grid}>
                <div className={Styles.InputGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <div className={Styles.Input}>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Enter Your FirstName"
                    />
                    <BiUser className={Styles.Icon} />
                  </div>
                </div>
                <div className={Styles.InputGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <div className={Styles.Input}>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Enter Your LastName"
                    />
                    <BiUser className={Styles.Icon} />
                  </div>
                </div>
              </div>

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
              <button className={Styles.RegisterBtn} type="submit">
                Submit
              </button>
            </form>
            <div className={Styles.line}>

            </div>
          </div>
        </div>
        <div className={Styles.Right}>
          <img className={Styles.VectaryIcon} src={VectaryIcon} alt=""/>
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

export default SignUp;
