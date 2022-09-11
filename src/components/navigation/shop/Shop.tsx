import React from "react";
import classes from "./Shop.module.css";
import ShopLogo from "./ShopLogo";
import ShopList from "./ShopList";
const Shop: React.FC<{ orderCount: number }> = (props) => {
  return (
    <React.Fragment>
      <ShopLogo orderCount={1} />
      <ShopList />
    </React.Fragment>
  );
};

export default Shop;
