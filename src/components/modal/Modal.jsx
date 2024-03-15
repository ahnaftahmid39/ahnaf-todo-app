import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { useEffect, useRef } from "react";

const Modal = ({ open, handleClose, children, ...props }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (open) {
      modalRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;
  const handleEscapekey = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };
  return createPortal(
    <>
      <div className={styles["overlay"]} onClick={handleClose}></div>

      <div
        onKeyDown={handleEscapekey}
        ref={modalRef}
        tabIndex={0}
        className={styles["modal"]}
        {...props}
      >
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
