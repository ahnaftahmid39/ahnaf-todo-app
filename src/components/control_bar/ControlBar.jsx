import styles from "./ControlBar.module.scss";
import UpsertTodo from "./add_todo/UpsertTodo";
import ClearAllTodos from "./ClearAllTodos";
import ToggleTheme from "./ToggleTheme";
import ViewKeybinds from "./view_keybinds/ViewKeybinds";
import PopulateMockData from "./PopulateMockData";

const ControlBar = () => {
  return (
    <div className={styles["control-bar-wrapper"]}>
      <div className={styles["control-bar"]}>
        <UpsertTodo />
        <ClearAllTodos />
        <ToggleTheme />
        <ViewKeybinds />
        <PopulateMockData />
      </div>
    </div>
  );
};

export default ControlBar;
