import { useRef, useState } from "react";
import Input from "../../form_ui/Input";
import Select from "../../form_ui/Select";
import useTodoStore from "../../../store/todoStore";
import { uid } from "uid";
import Modal from "../../modal/Modal";
import { priorityOptions, statusOptions } from "../../../utils/constants";
import { useHotkeys } from "react-hotkeys-hook";
import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from "./UpsertTodo.module.scss";

const emptyTodo = {
  title: "",
  description: "",
  priority: "3",
  status: "pending",
};

const UpsertTodo = ({ label = "New", defaultTodo = emptyTodo }) => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  useHotkeys(
    "shift+a",
    () => {
      openModal();
    },
    { preventDefault: true }
  );

  const [todo, setTodo] = useState(defaultTodo);
  const [resetCounter, setResetCounter] = useState(0);
  const btnRef = useRef(null);

  // TODO:
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    transferFocus();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const resetForm = () => {
    setTodo({
      ...defaultTodo,
    });
    setResetCounter(resetCounter + 1);
  };

  const handleFormChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    if (todo.id !== undefined) {
      updateTodo(todo.id, { ...todo, updatedAt: new Date().toISOString() });
    } else {
      const currentDateTime = new Date().toISOString();
      addTodo({
        ...todo,
        id: uid(),
        createdAt: currentDateTime,
        updatedAt: currentDateTime,
      });
    }
    closeModal();
    resetForm();
  };

  const transferFocus = () => {
    if (btnRef && btnRef.current) btnRef.current.focus();
  };

  return (
    <>
      <button ref={btnRef} onClick={openModal}>
        {label.toLowerCase() === "new" ? (
          <CiCirclePlus size={32} />
        ) : (
          <CiEdit size={32} />
        )}
      </button>
      <Modal handleClose={closeModal} open={isOpen}>
        <div className={styles["title-close-wrapper"]}>
          <label>
            {label.toLowerCase() === "new" ? "Add new Todo" : "Update Todo"}
          </label>
          <button onClick={closeModal}>
            <IoIosCloseCircleOutline size={24} />
          </button>
        </div>
        <form onSubmit={handleFormSubmit} className={styles["form-wrapper"]}>
          <Input
            label={"Title"}
            fieldName={"title"}
            placeholder={"Todo title goes here"}
            onChangeHandler={handleFormChange}
            resetCounter={resetCounter}
            defaultValue={defaultTodo.title}
            autoFocus={true}
          />
          <Input
            label={"Description"}
            fieldName={"description"}
            placeholder={"Todo description goes here"}
            onChangeHandler={handleFormChange}
            defaultValue={defaultTodo.description}
            resetCounter={resetCounter}
          />

          <Select
            defaultValue={defaultTodo.priority}
            label={"Priority"}
            fieldName={"priority"}
            options={priorityOptions}
            onChangeHandler={handleFormChange}
            resetCounter={resetCounter}
          />

          <Select
            defaultValue={defaultTodo.status}
            label={"Status"}
            fieldName={"status"}
            options={statusOptions}
            onChangeHandler={handleFormChange}
            resetCounter={resetCounter}
          />

          <div className={styles["button-wrapper"]}>
            <button type="button" onClick={handleFormSubmit}>
              {defaultTodo.id === undefined ? "Add" : "Update"}
            </button>
            <button type="button" onClick={resetForm}>
              Clear
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UpsertTodo;
