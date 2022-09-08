import React from "react";
import classes from "./Detail.module.css";
import { useSelector } from "react-redux";
import ProductPrice from "./ProductPrice";
import { RootState } from "../../../redux/store";
import CTAButton from "../../ui/CTAButton";
import minusSvg from "../../../assets/images/icon-minus.svg";
import plusSvg from "../../../assets/images/icon-plus.svg";
import ProductDetailForm from "./ProductDetailForm";
const Detail = () => {
  const productDetail = useSelector((state: RootState) => state.product);
  const finallPrice = productDetail.price* (100-productDetail.discount)/100
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
      <ProductPrice />
      <ProductDetailForm productPrice={finallPrice} productName={productDetail.header} />
    </section>
  );
};

export default Detail;
