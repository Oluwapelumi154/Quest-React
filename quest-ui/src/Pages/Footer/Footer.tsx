import React from "react";
import Styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={Styles.Footer}>
      <div className={Styles.Container}>
        <div className={Styles.Trials}>
          <h1 className={Styles.TrialsHeader}> Start your free trial </h1>
          <div className={Styles.FooterForm}>
            <input type="text" placeholder="Enter your Email" />
            <button>Start Free Trial</button>
          </div>
          <div className={Styles.TrailText}>
            <p className={Styles.FooterNavLink}>
              Already Using Quest ? <a href="/sign-in">Sign In</a>
            </p>
            <p> Want to take Quest for a spin ? Try the demo.</p>
          </div>
        </div>
        <div className={Styles.Product}>
          <h1 className={Styles.ProductHeader}>Product</h1>
          <ul className={Styles.FooterNavLinks}>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Use Cases</a>
            </li>
            <li>
              <a href="/">Integration</a>
            </li>
          </ul>
        </div>
        <div className={Styles.Quest}>
          <h1 className={Styles.QuestHeader}>Quest</h1>
          <ul className={Styles.FooterNavLinks}>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Use Cases</a>
            </li>
            <li>
              <a href="/">Integration</a>
            </li>
          </ul>
        </div>
        <div className={Styles.Resources}>
          <h1 className={Styles.ResourcesHeader}>Resources</h1>
          <ul className={Styles.FooterNavLinks}>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Use Cases</a>
            </li>
            <li>
              <a href="/">Integration</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
