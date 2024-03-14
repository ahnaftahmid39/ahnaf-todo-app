import Input from "../form-ui/Input";
import Select from "../form-ui/Select";

const AddTodo = () => {
  return (
    <div>
      <form>
        <Input
          label={"Title"}
          fieldName={"title"}
          placeholder={"Todo title goes here"}
        />
        <Input
          label={"Description"}
          fieldName={"description"}
          placeholder={"Todo description goes here"}
        />

        <Select
          defaultValue={"2"}
          label={"Priority"}
          fieldName={"priority"}
          options={["1", "2", "3", "4", "5"]}
        />

        <Select
          defaultValue={"pending"}
          label={"Status"}
          fieldName={"status"}
          options={["pending", "in-progress", "completed", "failed"]}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
