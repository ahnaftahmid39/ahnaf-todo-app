import { useState } from "react";
import useTodoStore from "../../store/todoStore";
import Modal from "../modal/Modal";
import Warning from "../warning/Warning";

const ClearAllTodos = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      <button onClick={showModal}>All clear</button>
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
