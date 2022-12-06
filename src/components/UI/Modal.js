import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

//main component
const Modal = (props) => {
  const portalTag = document.getElementById("overlays");
  return (
    <React.Fragment>
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalTag)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalTag
      )}
    </React.Fragment>
  );
};

export default Modal;
