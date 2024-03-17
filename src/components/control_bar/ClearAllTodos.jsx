import { useRef, useState } from "react";
import useTodoStore from "../../store/todoStore";
import Modal from "../modal/Modal";
import Warning from "../warning/Warning";
import { useHotkeys } from "react-hotkeys-hook";
import { CiTrash } from "react-icons/ci";

const ClearAllTodos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const setTodos = useTodoStore((state) => state.setTodos);

  const clearAllTodos = () => {
    setTodos([]);
    closeModal();
  };

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

  useHotkeys("shift+x", () => {
    showModal();
  });

  return (
    <>
      <button ref={btnRef} onClick={showModal}>
        <CiTrash size={32} />
      </button>
      <Modal open={isOpen} handleClose={closeModal}>
        <Warning
          warningMessage="Are you sure you want to clear all todos?"
          firstBtnLabel="Yes"
          firstBtnOnClick={clearAllTodos}
          secondBtnLabel="No"
          secondBtnOnClick={closeModal}
        />
      </Modal>
    </>
  );
};

export default ClearAllTodos;
