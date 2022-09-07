import React from "react";
import hamberSvg from "../../assets/images/icon-menu.svg";
import classes from './Hamber.module.css'
interface HamberFace{
  onOpenNav:(open:boolean)=>void;
}
const Hamber: React.FC<HamberFace> = (props) => {
  return <img onClick={props.onOpenNav.bind(undefined,true)} className={classes.hamber} src={hamberSvg} alt="hamber" />;
};

export default Hamber;
