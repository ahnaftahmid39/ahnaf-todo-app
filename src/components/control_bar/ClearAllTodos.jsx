import { useRef, useState } from "react";
import useTodoStore from "../../store/todoStore";
import Modal from "../modal/Modal";
import Warning from "../warning/Warning";

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
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const transferFocus = () => {
    btnRef.current.focus();
  };

  return (
    <>
      <button ref={btnRef} onClick={showModal}>
        All clear
      </button>
      <Modal
        open={isOpen}
        handleClose={closeModal}
        transferFocus={transferFocus}
      >
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