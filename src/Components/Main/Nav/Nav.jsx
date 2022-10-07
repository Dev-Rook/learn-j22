import React, { useState } from "react";
import Styles from "../../../Styles/Component-Styles/Nav/Nav.module.css";

import { Link } from "react-router-dom";

// Material UI Imports Start
import MenuIcon from "@mui/icons-material/Menu";
import SailingIcon from '@mui/icons-material/Sailing';
// Material UI Imports End

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  const hideMenuFunction = () => {
    setHideMenu((prev) => !prev);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={Styles.NavBar}>
      <div className={Styles.Left_Side}>
        <Link to={"/"}>
          {/* <div className={Styles.Logo_Container}>
            <img
              src={require("../../../Assests/Images/Logo.png")}
              className={Styles.Logo}
              alt=""
            />
          </div> */}
          <SailingIcon sx={{fontSize: 30, color: "white"}} />
        </Link>

        <h3 className={Styles.Brand}>J22</h3>
      </div>

      <div className={Styles.Right_Side}>
        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <Link to={"KnotsRopes"} className={Styles.Navlink}>
              Knots & Ropes
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={"Sails"} className={Styles.Navlink}>
              Sails
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={"HullStructure"} className={Styles.Navlink}>
              Hull & Structure
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={"Manuevering"} className={Styles.Navlink}>
              Manuevering
            </Link>
          </li>
        </ul>

        <MenuIcon
          sx={{ fontSize: 30 }}
          onClick={showMenu}
          className={Styles.Menu_Icon}
        />
      </div>
    </div>
  );
};

export default Nav;
