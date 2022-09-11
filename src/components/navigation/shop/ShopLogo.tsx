import classes from "./ShopLogo.module.css";
import React from "react";
import { uiActions } from "../../../redux/slices/uiSlice";
import { useDispatch } from "react-redux";
import CartSvg from "../../../assets/images/icon-cart.svg";

interface ShopLogoFace {
    orderCount:number
}
const ShopLogo:React.FC<ShopLogoFace> = (props) => {
    const dispatch = useDispatch()

  const cartClickHandler = () => {
    dispatch(uiActions.ChangeShopListState(true))
  };
  return (
    <div className={classes["cart__container"]}>
      <img
        onClick={cartClickHandler}
        className={classes["cart__image"]}
        src={CartSvg}
        alt="Ordered Logo"
      />
      <span className={classes["cart__counter"]}> {props.orderCount} </span>
    </div>
  );
};

export default ShopLogo;
