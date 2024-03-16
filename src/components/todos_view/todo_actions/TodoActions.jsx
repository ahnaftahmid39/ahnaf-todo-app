import { CiCircleMore } from "react-icons/ci";
import Modal from "../../modal/Modal";
import { useState } from "react";
import UpsertTodo from "../../control_bar/add_todo/UpsertTodo";

const TodoActions = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={openModal}>
        <CiCircleMore size={24} />
      </button>
      <Modal open={isOpen} handleClose={closeModal}>
        <div>
          <UpsertTodo label={"Edit"} defaultTodo={todo} />
          <button>Delete</button>
          <button>Mark as Done</button>
        </div>
      </Modal>
    </>
  );
};

export default TodoActions;
