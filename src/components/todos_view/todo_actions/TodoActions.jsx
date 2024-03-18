import { CiCircleCheck, CiCircleMore } from "react-icons/ci";
import { useRef, useState, useEffect } from "react";
import UpsertTodo from "../../control_bar/add_todo/UpsertTodo";
import useTodoStore from "../../../store/todoStore";
import { fields, statusOptionsEnum } from "../../../utils/constants";
import styles from "./TodoActions.module.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

const TodoActions = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (popupRef && popupRef.current) {
        console.log("Focused");
        // popupRef.current.focus();
        popupRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isOpen, popupRef]);

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
      <div tabIndex={-1} className={styles["todo-actions-popup-wrapper"]}>
        <button
          aria-hidden={!isOpen}
          className={styles["action-button"]}
          onClick={openModal}
        >
          <CiCircleMore size={24} />
        </button>
        {/* TODO: clean this code */}
        <div
          ref={popupRef}
          aria-hidden={!isOpen}
          className={styles["actions-wrapper"]}
        >
          <div onClick={closeModal} className={styles["overlay"]}></div>

          <div className={styles["action-buttons-wrapper"]}>
            <div className={styles["title-close-wrapper"]}>
              <label>Actions</label>
              <button className={styles["close-button"]} onClick={closeModal}>
                <IoIosCloseCircleOutline size={24} />
              </button>
            </div>
            <UpsertTodo
              onEditButtonClick={closeModal}
              label={"Edit"}
              defaultTodo={todo}
            />
            <button
              onClick={handleDelete}
              className={styles["icon-button-wrapper"]}
            >
              <CiCircleMinus size={24} />
              <label>Delete</label>
            </button>
            {todo.status !== statusOptionsEnum.COMPLETED && (
              <button
                onClick={handlMarkAsDone}
                className={styles["icon-button-wrapper"]}
              >
                <CiCircleCheck size={24} />
                <label>Mark as Done</label>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoActions;
