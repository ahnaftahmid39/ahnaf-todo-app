import { useRef, useState } from "react";
import Modal from "../../modal/Modal";
import { useHotkeys } from "react-hotkeys-hook";
import { CiCircleRemove, CiKeyboard } from "react-icons/ci";

import styles from "./ViewKeybinds.module.scss";

const ViewKeybinds = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
    transferFocus();
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const transferFocus = () => {
    btnRef.current.focus();
  };

  useHotkeys("shift+h", () => {
    showModal();
  });

  return (
    <>
      <button ref={btnRef} type="button" onClick={showModal}>
        <CiKeyboard size={32} />
      </button>
      <Modal open={isOpen} handleClose={closeModal}>
        <div className={styles["wrapper"]}>
          <div className={styles["title-close-wrapper"]}>
            <h2>Keybinds</h2>
            <button onClick={closeModal}>
              <CiCircleRemove size={24} />
            </button>
          </div>
          <ul>
            <li>
              <span> Add New Todo</span>
              <kbd>shift + a</kbd>
            </li>
            <li>
              <span> Show Keybinds</span>
              <kbd>shift + h</kbd>
            </li>
            <li>
              <span>Toggle Theme</span>
              <kbd>shift + t</kbd>
            </li>
            <li>
              <span> Clear All Todos</span>
              <kbd>shift + x</kbd>
            </li>
            <li>
              <span> Go to Search Bar</span>
              <kbd>ctrl + k</kbd>
            </li>
            <li>
              <span> Filter In-progress Todos </span>
              <kbd>alt + i</kbd>
            </li>
            <li>
              <span> Filter Pending</span>
              <kbd>alt + p</kbd>
            </li>
            <li>
              <span> Reset Filter</span>
              <kbd>alt + m</kbd>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default ViewKeybinds;
