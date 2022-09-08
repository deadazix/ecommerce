import React from "react";
import classes from "./ProductPrice.module.css";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
const ProductPrice = () => {
  const productDetail = useSelector((state: RootState) => state.product);
  const finalPrice = (
    productDetail.price -
    (productDetail.price * productDetail.discount) / 100
  ).toFixed(2);
  return (
    <div className={classes.price}>
      <span
        data-discount={productDetail.discount + "%"}
        className={classes["price__finall"]}
      >
        {" "}
        {finalPrice}{" "}
      </span>
      <span className={classes["price__initial"]}>{productDetail.price} </span>
    </div>
  );
};

export default ProductPrice;
