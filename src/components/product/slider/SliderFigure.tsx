import React from 'react'
import classes from './SliderFigure.module.css'
import ImageProcider from '../../../utils/ImageProcider'
const SliderFigure:React.FC<{currentSlide:number}> = (props) => {
    const percentageToTransform = -props.currentSlide+1+'00%'
  return (
    <figure className={classes["slider__fiqure"]}>
    <ImageProcider style= {{transform:`translate(${percentageToTransform})`}}
      className={classes["slider__large-image"]}
      imageName="imageOneLarge"
    />
    <ImageProcider style= {{transform:`translate(${percentageToTransform})`}}
      className={classes["slider__large-image"]}
      imageName="imageTwoLarge"
    />
    <ImageProcider style= {{transform:`translate(${percentageToTransform})`}}
      className={classes["slider__large-image"]}
      imageName="imageThreeLarge"
    />
    <ImageProcider style= {{transform:`translate(${percentageToTransform})`}}
      className={classes["slider__large-image"]}
      imageName="imageFourLarge"
    />
  </figure>
  )
}

export default SliderFigure