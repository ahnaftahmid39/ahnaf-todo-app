import TodoHeading from "./todo_heading/TodoHeading";
import { fields } from "../../../utils/constants";

const HeadingsBar = ({ className }) => {
  return (
    <div className={`${className}`} >
      <TodoHeading fieldName={fields.id} label="SN" />
      <TodoHeading fieldName={fields.title} label="title" sortable />
      <TodoHeading fieldName={fields.description} label="Description" />
      <TodoHeading fieldName={fields.status} label="Status" sortable />
      <TodoHeading fieldName={fields.priority} label="Priority" sortable />
      <TodoHeading
        fieldName={fields.createdAt}
        label="Creation Time"
        sortable
      />
      <TodoHeading fieldName={fields.id} label="Action" />
    </div>
  );
};

export default HeadingsBar;
