import styles from "./ControlBar.module.scss";
import AddTodo from "./add_todo/AddTodo";
import ClearAllTodos from "./ClearAllTodos";
import ToggleTheme from "./ToggleTheme";
import ViewKeybinds from "./view_keybinds/ViewKeybinds";

const ControlBar = () => {
  return (
    <div className={styles["control-bar"]}>
      <AddTodo />
      <ClearAllTodos />
      <ToggleTheme />
      <ViewKeybinds />
    </div>
  );
};

export default ControlBar;
