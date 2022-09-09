import React from "react";
import classes from "./OrdersLogo.module.css";
import CartSvg from "../../assets/images/icon-cart.svg";

const OrdersLogo:React.FC<{orderCount:number}> = (props) => {
  const cartClickHandler = () => {};
  return (
    <div className={classes['cart__container']}>
      <img
        onClick={cartClickHandler}
        className={classes['cart__image']}
        src={CartSvg}
        alt="Ordered Logo"
      />
      <span className={classes['cart__counter']}> {props.orderCount} </span>
    </div>
  );
};

export default OrdersLogo;
