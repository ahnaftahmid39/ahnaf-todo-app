import styles from "./HeadingsBar.module.scss";
import TodoHeading from "./todo_heading/TodoHeading";
import { fields } from "../../../utils/constants";

const HeadingsBar = () => {
  return (
    <div className={styles["headings-wrapper"]}>
      {/* TODO: customize non-sortable fields */}
      <TodoHeading
        className={styles["serial-no"]}
        fieldName={fields.id}
        label="SN"
      />
      <TodoHeading
        className={styles["title"]}
        fieldName={fields.title}
        label="title"
      />
      <TodoHeading
        className={styles["description"]}
        fieldName={fields.description}
        label="Description"
      />
      <TodoHeading
        className={styles["status"]}
        fieldName={fields.status}
        label="Status"
      />
      <TodoHeading
        className={styles["priority"]}
        fieldName={fields.priority}
        label="Priority"
      />
      <TodoHeading
        className={styles["creation-time"]}
        fieldName={fields.createdAt}
        label="Creation Time"
      />
      <TodoHeading
        className={styles["actions"]}
        fieldName={fields.id}
        label="Actions"
      />
    </div>
  );
};

export default HeadingsBar;
