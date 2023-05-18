import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link} from "react-router-dom";
import SignUp from "../../Pages/SignUp/SignUp";
const Navbar = () => {
  const [showMenu, setMenu] = useState(false);
  const displayMenu = () => {
    setMenu((prevState) => !prevState);
  };
  const SignUpComponent = () => {
  };
  return (
    <nav className={Styles.NavBar}>
      <Link to="/" className={Styles.NavBrand}>
        Quest
      </Link>
      <div onClick={displayMenu} className={Styles.MenuIcon}>
        <BiMenuAltRight />
      </div>
      {showMenu ? (
        <div className={Styles.MobileView}>
          <ul className={Styles.NavLinks}>
            <li className={Styles.NavLink}>
              <Link className={Styles.NavText} to="/">
                Home
              </Link>
            </li>
            <li className={Styles.NavLink}>
              <Link className={Styles.NavText} to="/resource">
                Resources
              </Link>
            </li>
            <li className={Styles.NavLink}>
              <Link className={Styles.NavText} to="/pricing">
                Pricing
              </Link>
            </li>
            <li className={Styles.NavLink}>
              <Link className={Styles.NavText} to="/contact">
                Contact
              </Link>
            </li>
            <li className={Styles.NavLink}>
              <Link className={Styles.NavText} to="/sign-in">
                Log in
              </Link>
            </li>
            <li className={Styles.NavLink}>
              <button className={Styles.NavButton}>Sign up for free</button>
            </li>
          </ul>
        </div>
      ) : (
        <div className={Styles.DesktopView}>
          <ul className={Styles.NavLinks}>
            <li className={Styles.NavLink}>
              <Link className={Styles.NavText} to="/">
                Home
              </Link>
            </li>
            <li className={Styles.NavLink}>
              <Link className={Styles.NavText} to="/resource">
                Resources
              </Link>
            </li>
            <li className={Styles.NavLink}>
              <Link className={Styles.NavText} to="/pricing">
                Pricing
              </Link>
            </li>
            <li className={Styles.NavLink}>
              <Link className={Styles.NavText} to="/contact">
                Contact
              </Link>
            </li>
            <li className={Styles.NavLink}>
              <Link className={Styles.NavText} to="/sign-in">
                Log in
              </Link>
            </li>
            <li className={Styles.NavLink}>
              <button className={Styles.NavButton}>
                Sign up for free
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
