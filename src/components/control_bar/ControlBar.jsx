import styles from "./ControlBar.module.scss";
import AddTodo from "./add_todo/AddTodo";
import ClearAllTodos from "./ClearAllTodos";
import ToggleTheme from "./ToggleTheme";

const ControlBar = () => {
  return (
    <div className={styles["control-bar"]}>
      <AddTodo />
      <ClearAllTodos />
      <ToggleTheme />
      <button>shortcuts</button>
    </div>
  );
};

export default ControlBar;
