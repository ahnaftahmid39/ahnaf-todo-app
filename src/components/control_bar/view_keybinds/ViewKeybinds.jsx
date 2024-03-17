import { useRef, useState } from "react";
import Modal from "../../modal/Modal";
import { useHotkeys } from "react-hotkeys-hook";

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
        View Shortcuts
      </button>
      <Modal open={isOpen} handleClose={closeModal}>
        <div>
          <h2>Keybinds</h2>
          <ul>
            <li>
              <span>shift + a</span>
              <br></br>
              <span>Add New Todo</span>
            </li>
            <li>
              <span>shift + h</span>
              <br></br>
              <span>Show Keybinds</span>
            </li>
            <li>
              <span>shift + t</span>
              <br></br>
              <span>Toggle Theme</span>
            </li>
            <li>
              <span>shift + x</span>
              <br></br>
              <span>Clear All Todos</span>
            </li>
            <li>
              <span>ctrl + k</span>
              <br></br>
              <span>Go to Search Bar</span>
            </li>
            <li>
              <span>alt + i</span>
              <br></br>
              <span>Filter In-progress Todos </span>
            </li>
            <li>
              <span>alt + p</span>
              <br></br>
              <span>Filter Pending</span>
            </li>
            <li>
              <span>alt + m</span>
              <br></br>
              <span>Reset Filter</span>
            </li>

          </ul>
        </div>
      </Modal>
    </>
  );
};

export default ViewKeybinds;
