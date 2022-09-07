import React, { useState } from "react";
import OrdersLogo from "./OrdersLogo";
import Profile from "./Profile";
import Hamber from "./Hamber";
import Logo from "./Logo";
import Nav from "./nav/Nav";
import classes from "./Navigation.module.css";
import Modal from "../ui/modal/Modal";
const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const onNavStateHandler = (isOpen: boolean) => {
    setIsNavOpen(isOpen)
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
      {isNavOpen && (
        <Modal onClose={ onNavStateHandler }>
          <Nav onClose={ onNavStateHandler }/>
        </Modal>
      )}
    </nav>
  );
};

export default Navigation;
