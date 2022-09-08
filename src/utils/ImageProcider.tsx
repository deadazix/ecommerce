import imageOneSmall from "../assets/images/1-1-sm.jpg";
import imageOneLarge from "../assets/images/1-1-lg.jpg";
import imageTwoSmall from "../assets/images/1-2-sm.jpg";
import imageTwoLarge from "../assets/images/1-2-lg.jpg";
import imageThreeSmall from "../assets/images/1-3-sm.jpg";
import imageThreeLarge from "../assets/images/1-3-lg.jpg";
import imageFourSmall from "../assets/images/1-4-sm.jpg";
import imageFourLarge from "../assets/images/1-4-lg.jpg";
import React from "react";
type imageNameType =
  | "imageOneSmall"
  | "imageOneLarge"
  | "imageTwoSmall"
  | "imageTwoLarge"
  | "imageThreeSmall"
  | "imageThreeLarge"
  | "imageFourSmall"
  | "imageFourLarge";
const imagesObj = {
  imageOneSmall,
  imageOneLarge,
  imageTwoSmall,
  imageTwoLarge,
  imageThreeSmall,
  imageThreeLarge,
  imageFourSmall,
  imageFourLarge,
};
const ImageProcider: React.FC<{ imageName: imageNameType,className:string,style:{}}> = (props) => {
  return <img style={props.style} className={props.className} src={imagesObj[props.imageName]} />;
};

export default ImageProcider;
