import React, { useState } from "react";
import OrdersLogo from "./OrdersLogo";
import Profile from "./Profile";
import Hamber from "./Hamber";
import Logo from "./Logo";
import Nav from "./nav/Nav";
import classes from "./Navigation.module.css";
import { CSSTransition } from "react-transition-group";
import Modal from "../ui/modal/Modal";
export type NavTransform =
  | "u-transformX-positive-0"
  | "u-transformX-negative-100";
const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navTransformState, setNavTransformState] = useState<NavTransform>(
    "u-transformX-negative-100"
  );
// Changing NavState 
  const onNavStateHandler = (isOpen: boolean) => {
    setIsNavOpen(isOpen);
  };
  // TRANSITION HANDLERS
  const onEnteringHandler = () => {
    setNavTransformState("u-transformX-positive-0");
  };
  const onExitingHandler = () => {
    setNavTransformState("u-transformX-negative-100");
  };
  return (
    <nav className={classes.navigation}>
      <div className={classes["navigation-container"]}>
        <Hamber onOpenNav={onNavStateHandler} />
        <Logo />
      </div>

      <div className={classes["navigation-container"]}>
        <OrdersLogo />
        <Profile />
      </div>
      {/* MODAL */}
      <CSSTransition
        in={isNavOpen}
        timeout={isNavOpen ? 0 : 200}
        onEntering={onEnteringHandler}
        onExiting={onExitingHandler}
        mountOnEnter
        unmountOnExit
      >
        <Modal onClose={onNavStateHandler}>
          <Nav
            navTransformState={navTransformState}
            onClose={onNavStateHandler}
          />
        </Modal>
      </CSSTransition>
    </nav>
  );
};

export default Navigation;
