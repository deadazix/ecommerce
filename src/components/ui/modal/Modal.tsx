import ReactDOM from "react-dom";
import React from "react";
import classes from "./Modal.module.css";
type BackDropType = 'u-backdrop-light'|'u-backdrop-dark'
interface ModalFace {
  children: React.ReactNode;
  onClose: (isClose: boolean) => void;
  type?:BackDropType

}
interface BackDropFace {
  onClose: (isClose: boolean) => void;
  type?:BackDropType
}
const Modal: React.FC<ModalFace> = (props) => {
  const BackDrop: React.FC<BackDropFace> = (props) => {
    return (
      <div
        onClick={props.onClose.bind(undefined, false)}
        className={`${classes.backdrop} ${props.type}`}
      ></div>
    );
  };
  const Cotent: React.FC<{ children: React.ReactNode }> = (props) => {
    return <React.Fragment>{props.children}</React.Fragment>;
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop  type={props.type} onClose={props.onClose} />,
        document.getElementById("modal") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <Cotent>{props.children}</Cotent>,
        document.getElementById("modal") as HTMLElement
      )}
    </React.Fragment>
  );
};

export default Modal;
