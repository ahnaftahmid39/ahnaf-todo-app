import { useRef, useState } from "react";
import Input from "../../form_ui/Input";
import Select from "../../form_ui/Select";
import useTodoStore from "../../../store/todoStore";
import { uid } from "uid";
import Modal from "../../modal/Modal";
import { priorityOptions, statusOptions } from "../../../utils/constants";

const emptyTodo = {
  title: "",
  description: "",
  priority: "3",
  status: "pending",
};

const UpsertTodo = ({ label = "New", defaultTodo = emptyTodo }) => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const [todo, setTodo] = useState(defaultTodo);
  const [resetCounter, setResetCounter] = useState(0);
  const btnRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

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
    btnRef.current.focus();
  };

  return (
    <>
      <button ref={btnRef} onClick={openModal}>
        {label}
      </button>
      <Modal handleClose={closeModal} open={isOpen}>
        <form>
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

          <button type="button" onClick={handleFormSubmit}>
            {defaultTodo.id === undefined ? "Add" : "Update"}
          </button>
          <button type="button" onClick={resetForm}>
            Clear
          </button>
        </form>
      </Modal>
    </>
  );
};

export default UpsertTodo;
