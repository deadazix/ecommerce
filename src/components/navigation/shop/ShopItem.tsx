import React from "react";
import { SingleShopFace } from "../../../redux/slices/userSlice";
import classes from "./ShopItem.module.css";

interface ShopItemFace {
  item: SingleShopFace;
}
const ShopItem: React.FC<ShopItemFace> = (props) => {
  return (
    <li className={classes.item}>
      <span className={classes["item__name"]}>{props.item.productName}</span>
    </li>
  );
};

export default ShopItem;
