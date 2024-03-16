import { CiCircleMore } from "react-icons/ci";
import Modal from "../../modal/Modal";
import { useState } from "react";
import UpsertTodo from "../../control_bar/add_todo/UpsertTodo";
import useTodoStore from "../../../store/todoStore";
import { fields, statusOptionsEnum } from "../../../utils/constants";

const TodoActions = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const removeTodo = useTodoStore((state) => state.removeTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const handleDelete = () => {
    removeTodo(todo.id);
    closeModal();
  };

  const handlMarkAsDone = () => {
    updateTodo(todo.id, { [fields.status]: statusOptionsEnum.COMPLETED });
    closeModal();
  };
  return (
    <>
      <button onClick={openModal}>
        <CiCircleMore size={24} />
      </button>
      {/* TODO: make it a popup instead of todo */}
      <Modal open={isOpen} handleClose={closeModal}>
        <div>
          <UpsertTodo label={"Edit"} defaultTodo={todo} />
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handlMarkAsDone}>Mark as Done</button>
        </div>
      </Modal>
    </>
  );
};

export default TodoActions;
