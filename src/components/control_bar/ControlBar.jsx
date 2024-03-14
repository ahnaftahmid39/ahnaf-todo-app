import styles from "./ControlBar.module.scss";
import AddTodo from "../add_todo/AddTodo";
import ClearAllTodos from "./ClearAllTodos";

const ControlBar = () => {
  return (
    <div className={styles["control-bar"]}>
      <AddTodo />
      <ClearAllTodos />
      <button>theme</button>
      <button>shortcuts</button>
    </div>
  );
};

export default ControlBar;
