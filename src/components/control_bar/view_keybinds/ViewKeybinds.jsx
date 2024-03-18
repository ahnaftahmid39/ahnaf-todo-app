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
      <button title="View Keybinds" ref={btnRef} type="button" onClick={showModal}>
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
              <span>
                <kbd>shift</kbd> + <kbd>a</kbd>
              </span>
            </li>
            <li>
              <span> Show Keybinds</span>
              <span>
                <kbd>shift</kbd> + <kbd>h</kbd>
              </span>
            </li>
            <li>
              <span>Toggle Theme</span>
              <span>
                <kbd>shift</kbd> + <kbd>t</kbd>
              </span>
            </li>
            <li>
              <span> Clear All Todos</span>
              <span>
                <kbd>shift</kbd> + <kbd>x</kbd>
              </span>
            </li>
            <li>
              <span> Go to Search Bar</span>
              <span>
                <kbd>ctrl</kbd> + <kbd>k</kbd>
              </span>
            </li>
            <li>
              <span> Filter In-progress Todos </span>
              <span>
                <kbd>alt</kbd> + <kbd>i</kbd>
              </span>
            </li>
            <li>
              <span> Filter Pending</span>
              <span>
                <kbd>alt</kbd> + <kbd>p</kbd>
              </span>
            </li>
            <li>
              <span> Reset Filter</span>
              <span>
                <kbd>alt</kbd> + <kbd>m</kbd>
              </span>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default ViewKeybinds;
