import React from "react";
import Users from "./data.json";
import Styles from "./Card.module.css";
import imag from '../../svgs/Ellipse 1.svg'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
const Card = () => {
  return (
    <>
      {Users.map((User) => (
        <div key={User.id} className={Styles.Card}>
          <div className={Styles.CardHeader}>
            <img src={imag} className={Styles.UserProfilePic} alt="user"/>
            <div className={Styles.Ratings}>
            <AiFillStar className={Styles.Rating}/>
            <AiFillStar className={Styles.Rating}/>
            <AiFillStar className={Styles.Rating}/>
            <AiFillStar className={Styles.Rating}/>
            <AiOutlineStar className={Styles.Rating}/>
            </div>
          </div>
          <div className={Styles.CardBody}>
            <h2>{User.name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ullam iste harum, quidem consectetur minima iure at eligendi nam
              cum!
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
