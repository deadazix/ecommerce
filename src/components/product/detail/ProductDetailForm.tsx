import classes from "./ProductDetailForm.module.css";
import React, { useState } from "react";
import CTAButton from "../../ui/CTAButton";
import minusSvg from "../../../assets/images/icon-minus.svg";
import plusSvg from "../../../assets/images/icon-plus.svg";

const ProductDetailForm: React.FC<{ productName: string,productPrice:number }> = (props) => {
  const [counter, setCounter] = useState(0);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if(counter===0)return
    const porductChoosenData = {
      name: props.productName,
      amount: counter,
      price:props.productPrice,
      totalPrice:props.productPrice * counter
      
    };
    console.log(porductChoosenData)
  };
  const ChangeCounterHandler = (amount: 1 | -1) => {
    if (counter + amount < 0) return;
    setCounter((prw) => {
      return prw + amount;
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes["counter"]}>
        <img
          alt="icon minus svg"
          className={classes["counter__minus"]}
          src={minusSvg}
          onClick={ChangeCounterHandler.bind(undefined, -1)}
        />
        <span className={classes["counter__number"]}> {counter} </span>
        <img
          alt="icon plus svg"
          className={classes["counter__plus"]}
          src={plusSvg}
          onClick={ChangeCounterHandler.bind(undefined, 1)}
        />
      </div>
      <CTAButton type="submit" className={classes.submit}>
        Add to cart
      </CTAButton>
    </form>
  );
};

export default ProductDetailForm;
