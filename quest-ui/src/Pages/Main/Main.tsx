import React from "react";
import Styles from "./Main.module.css";
import data from "./data.json";
import NetflixLogo from "../../svgs/Netflix (logo — Black).svg";
import CanopyLogo from "../../svgs/Canopy (logo — Black).svg";
import FundingCircleLogo from "../../svgs/Funding Circle (logo — Black).svg";
import HoltzmanLogo from "../../svgs/Holtzman Partners (logo — Black).svg";
import EbeneLogo from "../../svgs/Ebene_x0020_1.svg";
import NearPodLogo from "../../svgs/Nearpod (logo — Black).svg";
import RafkiLogo from "../../svgs/rafiki.svg";
import Card from "../../Components/Card/Card";
import QuestApp from  '../../svgs/Quest App.svg';
const Main = () => {
  return (
    <>
      <div className={Styles.HeroSection}>
        <div className={Styles.Left}>
          <h1 className={Styles.h1}>
            Fix your <small className={Styles.val}>Knowledge</small> Management
            Issues.
          </h1>
          <p className={Styles.p}> {data?.heroSection?.p} </p>
          <div className={Styles.BtnContainer}>
          <button className={Styles.RegisterBtn}>Create Account</button>
          </div>
        
        </div>
        <div className={Styles.Right}>
          <img src={RafkiLogo} alt="" />
        </div>
      </div>
      <div className={Styles.HeroLogo}>
        <div className={Styles.Logos}>
          <img src={HoltzmanLogo} alt="" />
          <img src={NetflixLogo} alt="" />
          <img src={CanopyLogo} alt="" />
          <img src={FundingCircleLogo} alt="" />
          <img src={NearPodLogo} alt="" />
          <img src={EbeneLogo} alt="" />
        </div>
      </div>
      <div className={Styles.Features}>
        <h2> Our Features</h2>
        <div className={Styles.FeatureContent}>
          <div className={Styles.Left}>
            <img className={Styles.SvgLogo} src={RafkiLogo} alt="" />
          </div>
          <div className={Styles.Right}>
            <h3> Convinient and Easy to Use</h3>
            <p>
              Quest is fully integrated with most popular business messaging
              apps messaging apps Slack and Ms Teams, so you can access all the
              information you need within a single conversation.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.Features}>
        <div className={Styles.FeatureContent}>
          <div className={Styles.Left}>
            <img className={Styles.SvgLogo} src={RafkiLogo} alt="" />
          </div>
          <div className={Styles.Right}>
            <h3>Easily find what you need </h3>
            <p>
              Save hours of Searching, just type in a question and Quest will
              show you the relevant document
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.Features}>
        <div className={Styles.FeatureContent}>
          <div className={Styles.Left}>
            <img className={Styles.SvgLogo} src={RafkiLogo} alt="" />
          </div>
          <div className={Styles.Right}>
            <h3>Stay up to date with everything from one place </h3>
            <p>
              Know what's is happening before it does thanks to our chatBox
              Integrations that let you know about new messages or updates as
              soon as they happen
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.Testimonials}>
        <Card />
      </div>
      <div className={Styles.SubscriberSection}>
        <h2> Subscribe to our NewsLetter </h2>
        <div className={Styles.FormContent}>
          <div className={Styles.SubscriberForm}>
            <input type="search" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={Styles.MobileAppSection}>
        <div className={Styles.Left}>
          <h2> Download Our App </h2>
          <p>
            Download Quest App, it's smart,easy and fast. Available on Android
            and Apple devices.
          </p>
          <div className={Styles.AppLogo}>
          {/* <img src={AppLogo} alt=""/> */}
          </div>      
        </div>
        <div className={Styles.Right}>
          <img className={Styles.SvgLogo} src={QuestApp} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
