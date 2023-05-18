import React from "react";
import Users from "./data.json";
import Styles from "./Card.module.css";
import imag from '../../svgs/Ellipse 1.svg'
const Card = () => {
  return (
    <>
      {Users.map((User) => (
        <div key={User.id} className={Styles.Card}>
          <div className={Styles.CardHeader}>
            <img src={imag} className={Styles.UserProfilePic} alt="user"/>
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
