import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { useEffect, useRef } from "react";

const Modal = ({ open, handleClose, children, ...props }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (open) {
      modalRef.current.focus();
    }
  }, [open]);

  if (!open) return null;
  return createPortal(
    <>
      <div className={styles["overlay"]} onClick={handleClose}></div>

      <div ref={modalRef} tabIndex={0} className={styles["modal"]} {...props}>
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
