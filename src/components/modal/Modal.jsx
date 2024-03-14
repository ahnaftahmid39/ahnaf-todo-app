import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const Modal = ({ open, handleClose, children, ...props }) => {
  if (!open) return null;
  return createPortal(
    <>
      <div className={styles["overlay"]} onClick={handleClose}></div>
      <div className={styles["modal"]} {...props}>
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
