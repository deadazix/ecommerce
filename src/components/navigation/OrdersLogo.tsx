import React from "react";
import classes from "./OrdersLogo.module.css";
import CartSvg from "../../assets/images/icon-cart.svg";

const OrdersLogo = () => {
  return <img className={classes.cart} src={CartSvg} alt="Ordered Logo" />;
};

export default OrdersLogo;
