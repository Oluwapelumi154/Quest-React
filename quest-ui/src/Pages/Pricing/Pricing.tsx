import React from "react";
import Styles from "./Pricing.module.css";
import { BiDollar } from "react-icons/bi";
const Pricing = () => {
  return (
    <div className={Styles.PricingSection}>
      <div className={Styles.Container}>
        <div className={Styles.PricingPlans}>
          <div className={Styles.Starter}>
            <h1> Starter</h1>
            <div className={Styles.Price}>
              <BiDollar className={Styles.Currency} />
              <h3 className={Styles.Amount}>49</h3>
            </div>
            <div id="BlueBadge" className={Styles.badge}>
              <h2 className={Styles.BlueBadge}>Get free Access for 7days</h2>
            </div>
            <ul className={Styles.PlanFeatures}>
              <li className={Styles.feature}>
                <BiDollar className={Styles.TickIcon} />
                <small>1 User Account</small>
              </li>
              <li className={Styles.feature}>
                <BiDollar className={Styles.TickIcon} />
                <small>Up to 100 Contacts</small>
              </li>
              <li className={Styles.feature}>
                <BiDollar className={Styles.TickIcon} />
                <small>Basic Email & Chat Support</small>
              </li>
              <li className={Styles.feature}>
                <BiDollar className={Styles.TickIcon} />
                <small> Limited access to Features</small>
              </li>
            </ul>
          </div>
          <div className={Styles.Rugby}>
            <h1>Rugby</h1>
            <div className={Styles.Price}>
              <BiDollar id={Styles.RugbyCurrency} className={Styles.Currency} />
              <h3 className={Styles.Amount}>49</h3>
            </div>
            <div className={Styles.badge}>
              <h2 className={Styles.WhiteBadge}>Get free Access for 7days</h2>
            </div>
            <ul id={Styles.Rugby} className={Styles.PlanFeatures}>
              <li className={Styles.feature}>
                <BiDollar className={Styles.TickIcon} />
                <small>Up to 5 User Account</small>
              </li>
              <li className={Styles.feature}>
                <BiDollar className={Styles.TickIcon} />
                <small>Up to 1000 Account</small>
              </li>
              <li className={Styles.feature}>
                <BiDollar className={Styles.TickIcon} />
                <small>Priority Email & Chat Suppport</small>
              </li>
              <li className={Styles.feature}>
                <BiDollar className={Styles.TickIcon} />
                <small> Custom Branding & Templates </small>
              </li>
            </ul>
          </div>
          <div className={Styles.Saphhire}>
            <h1>Sapphire</h1>
            <div className={Styles.Price}>
              <BiDollar className={Styles.Currency} />
              <h3 className={Styles.Amount}>99</h3>
            </div>
            <div className={Styles.badge}>
              <h2 className={Styles.BlueBadge}>Get free Access for 7days</h2>
            </div>
            <ul className={Styles.PlanFeatures}>
              <li className={Styles.feature}>
              <BiDollar className={Styles.TickIcon} />
                <small>UnLimited User Account</small>
              </li>
              <li className={Styles.feature}>
              <BiDollar className={Styles.TickIcon} />
                <small>UnLimited Contacts</small>
              </li>
              <li className={Styles.feature}>
              <BiDollar className={Styles.TickIcon} />
                <small> 24/7 phone & email Support </small>
              </li>
              <li className={Styles.feature}>
              <BiDollar className={Styles.TickIcon} />
                <small>All features Included </small>
              </li>
              <li className={Styles.feature}>
              <BiDollar className={Styles.TickIcon} />
                <small> Advance Security & Compliance measures</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
