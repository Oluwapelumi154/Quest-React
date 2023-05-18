import React from "react";
import Styles from "./Contact.module.css";
import { BiUser } from "react-icons/bi";

const Contact = () => {
  return (
    <div className={Styles.ContactSection}>
      <div className={Styles.Container}>
        <p> Need Help ?</p>
        <h1>
          Contact <small className={Styles.blue}>Us.</small>
        </h1>
        <p> Need to get in touch with us, kindly fill out the form </p>
        <p> to reach us </p>
        <div className={Styles.ContactForm}>
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
              <label htmlFor="Email">Email</label>
              <div className={Styles.Input}>
                <input id="Email" type="text" placeholder="Enter Your Email" />
                <BiUser className={Styles.Icon} />
              </div>
            </div>
            <div className={Styles.InputGroup}>
              <label htmlFor="">How can we help you? </label>
              <textarea className={Styles.textArea} />
            </div>
            <button className={Styles.SubmitBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
