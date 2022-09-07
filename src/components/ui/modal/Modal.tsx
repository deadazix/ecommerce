import ReactDOM from "react-dom";
import React from "react";
import classes from "./Modal.module.css";
interface ModalFace {
  children: React.ReactNode;
  onClose: (isClose: boolean) => void;
}
interface BackDropFace {
  onClose: (isClose: boolean) => void;
}
const Modal: React.FC<ModalFace> = (props) => {
  const BackDrop: React.FC<BackDropFace> = (props) => {
    return (
      <div
        onClick={props.onClose.bind(undefined, false)}
        className={classes.backdrop}
      ></div>
    );
  };
  const Cotent: React.FC<{ children: React.ReactNode }> = (props) => {
    return <React.Fragment>{props.children}</React.Fragment>;
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
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
