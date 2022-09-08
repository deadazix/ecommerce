import React, { useState } from "react";
import { NavTransformStateType } from "../Navigation";
import NavLink from "./NavLink";
import classes from "./Nav.module.css";
interface NavFace {
  onClose: (isOpen: boolean) => void;
  navTransformState: NavTransformStateType;
}
const Nav: React.FC<NavFace> = (props) => {
  return (
    <ul className={`${classes.nav} ${props.navTransformState}`}>
      <NavLink onClose={props.onClose} name="collection" path="collection" />
      <NavLink onClose={props.onClose} name="men" path="men" />
      <NavLink onClose={props.onClose} name="women" path="women" />
      <NavLink onClose={props.onClose} name="men" path="Contact" />
    </ul>
  );
};

export default Nav;
