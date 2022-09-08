import React from "react";
import classes from "./SliderButton.module.css";
import next from "./../../../assets/images/icon-next.svg";
import previous from "../../../assets/images/icon-previous.svg";
interface SlideButtonFace {
  type: "next" | "previous";
  onChangeSlice: (type: 1 | -1) => void;
}
const chooseImage = {
  next,
  previous,
};
const SliderButton: React.FC<SlideButtonFace> = (props) => {
  const numberToChangeSlide = props.type === "next" ? 1 : -1;
  // CLASSES
  const buttonClasses = `${classes["slider__button"]} ${
    classes[`slider__button--${props.type}`]
  }`;
  return (
    <img
      className={buttonClasses}
      alt={props.type}
      onClick={props.onChangeSlice.bind(undefined, numberToChangeSlide)}
      src={chooseImage[props.type]}
    />
  );
};

export default React.memo(SliderButton);
