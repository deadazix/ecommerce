import React from "react";
import classes from "./Detail.module.css";
import { useSelector } from "react-redux";
import ProductPrice from "./ProductPrice";
import { RootState } from "../../../redux/store";
const Detail = () => {
  const productDetail = useSelector((state: RootState) => state.product);
  return (
    <section className={classes.detail}>
      <span className={classes["detail__company"]}>
        {productDetail.companyName}
      </span>
      <h1 className={classes["detail__header"]}>{productDetail.header}</h1>
      <p className={classes["detail__description"]}>
        {" "}
        {productDetail.description}{" "}
      </p>
      <ProductPrice/>
    </section>
  );
};

export default Detail;
