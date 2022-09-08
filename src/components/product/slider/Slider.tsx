import React, { useState } from "react";
import classes from "./Slider.module.css";
import ImageProcider from "../../../utils/ImageProcider";
import SliderButton from "./SliderButton";
import SliderFigure from "./SliderFigure";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const onChangeSliceHandler = (type: 1 | -1) => {
    const isSlideValid = currentSlide + type < 5 && currentSlide + type >0
    if (!isSlideValid) return
    setCurrentSlide((prw) => {
      return prw + type;
    });
  };
  return (
    <div className={classes.slider}>
      <SliderFigure currentSlide={currentSlide} />
      <SliderButton onChangeSlice={onChangeSliceHandler} type="previous" />
      <SliderButton onChangeSlice={onChangeSliceHandler} type="next" />
    </div>
  );
};

export default Slider;
