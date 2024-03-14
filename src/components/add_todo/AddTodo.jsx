import { useId, useState } from "react";
import Input from "../form-ui/Input";
import Select from "../form-ui/Select";
import useTodoStore from "../../store/todoStore";
import { uid } from "uid";

const emptyTodo = {
  title: "",
  description: "",
  priority: "2",
  status: "pending",
};

const AddTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [todo, setTodo] = useState(emptyTodo);
  const [resetCounter, setResetCounter] = useState(0);

  const resetForm = () => {
    setTodo({
      ...emptyTodo,
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
    const currentDateTime = new Date().toISOString();
    console.log("currentDateTime", currentDateTime);
    addTodo({
      ...todo,
      id: uid(),
      createdAt: currentDateTime,
      updatedAt: currentDateTime,
    });
    resetForm();
  };

  return (
    <>
      <form>
        <Input
          label={"Title"}
          fieldName={"title"}
          placeholder={"Todo title goes here"}
          onChangeHandler={handleFormChange}
          resetCounter={resetCounter}
        />
        <Input
          label={"Description"}
          fieldName={"description"}
          placeholder={"Todo description goes here"}
          onChangeHandler={handleFormChange}
          resetCounter={resetCounter}
        />

        <Select
          defaultValue={"2"}
          label={"Priority"}
          fieldName={"priority"}
          options={["1", "2", "3", "4", "5"]}
          onChangeHandler={handleFormChange}
          resetCounter={resetCounter}
        />

        <Select
          defaultValue={"pending"}
          label={"Status"}
          fieldName={"status"}
          options={["pending", "in-progress", "completed", "failed"]}
          onChangeHandler={handleFormChange}
          resetCounter={resetCounter}
        />

        <button type="button" onClick={handleFormSubmit}>
          Add
        </button>
        <button type="button" onClick={resetForm}>
          Clear
        </button>
      </form>
    </>
  );
};

export default AddTodo;
