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
import AppLogo from '../../svgs/app-store-png-logo-33115 1.svg'
import QuestApp from  '../../svgs/Quest App.svg';
import Ellipse1 from '../../svgs/Ellipse 1.svg'
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
          <button className={Styles.RegisterBtn}>Create Account</button>
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
          <img src={AppLogo} alt=""/>
          </div>      
        </div>
        <div className={Styles.Right}>
          <img className={Styles.SvgLogo} src={QuestApp} alt="" />
        </div>
      </div>
      <div className={Styles.QuestionSection}>
        <div className={Styles.Left}>
          <h2>Frequently Asked Question </h2>
          <p className={Styles.LeftParagraph}> Can't see your questions here ? </p>
          <ul className={Styles.QuesLinks}>
            <li className={Styles.QuestionText}>
              <a  className={Styles.QuestionLink} href="/"> Send us an Email</a>
            </li>
            <li className={Styles.QuestionText}>
              <a className={Styles.QuestionLink} href="/">Start a Live Chat</a>
            </li>
          </ul>
        </div>
        <div className={Styles.Right}>
          <ul className={Styles.QuestionsGroup}>
            <li>
              <h2 className={Styles.QuestionSubHeading}> Can i try Quest for free ?</h2>
              <p className={Styles.QuestionParagraph}> Yes! Quest is free to try for 7days on us. We think you'll love it and will ask for payment details at the end of your trial.</p>
            </li>
            <li>
              <h2  className={Styles.QuestionSubHeading}> Are there discounts for non-profits or educational use?</h2>
              <p className={Styles.QuestionParagraph}> Yes! Quest is free for non-profit and educational use. Email use at any time during your trial let us know or as to check if you qualify.</p>
            </li>
            <li>
              <h2  className={Styles.QuestionSubHeading}> How are users counted for billing?</h2>
              <p className={Styles.QuestionParagraph}> At the end of the monthly billing cycle, you will be billed for the month for the number of users that can login to Quest. any users added during the month will not count for the purpose of billing until the following month. Quest admins may deactivate users at any time.</p>
            </li>
            <li>
              <h2  className={Styles.QuestionSubHeading}> What happens if am not satisfied with Quest ?</h2>
              <p className={Styles.QuestionParagraph}> We offer a 30-day money back guarantee.</p>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Main;
