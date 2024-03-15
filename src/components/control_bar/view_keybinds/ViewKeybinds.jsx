import { useRef, useState } from "react";
import Modal from "../../modal/Modal";

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

  return (
    <>
      <button type="button" onClick={showModal}>
        View Shortcuts
      </button>
      <Modal open={isOpen} handleClose={closeModal}>
        <div>
          <h2>Keybinds</h2>
          <ul>
            <li>
              <span>Ctrl + N</span>
              <br></br>
              <span>New Todo</span>
            </li>
            <li>
              <span>Ctrl + S</span>
              <br></br>
              <span>Save</span>
            </li>
            <li>
              <span>Ctrl + Shift + C</span>
              <br></br>
              <span>Clear all</span>
            </li>
            <li>
              <span>Ctrl + Shift + F</span>
              <br></br>
              <span>Filter</span>
            </li>
            <li>
              <span>Ctrl + Shift + R</span>
              <br></br>
              <span>Reset filter</span>
            </li>
            <li>
              <span>Ctrl + Shift + T</span>
              <br></br>

              <span>Toggle theme</span>
            </li>
            <li>
              <span>Ctrl + Shift + H</span>
              <br></br>
              <span>View keybinds</span>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default ViewKeybinds;
