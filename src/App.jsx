import { useEffect } from "react";
import styles from "./sass/App.module.scss";
import ControlBar from "./components/control_bar/ControlBar";
import TodosView from "./components/todos_view/TodosView";
import { getTodos } from "./utils/persistStore";
import useTodoStore from "./store/todoStore";
import { useThemeStore } from "./store/themeStore";
import FiltersAndHeadingsBar from "./components/filter_bar/FiltersAndHeadingsBar";

function App() {
  useEffect(() => {
    const todosFromLS = getTodos();
    if (todosFromLS) {
      useTodoStore.getState().setTodos(todosFromLS);
    }
  }, []);

  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <div className={`theme-${theme}`}>
        <div className={styles["wrapper"]}>
          <ControlBar />
          <FiltersAndHeadingsBar />
          <TodosView />
        </div>
      </div>
    </>
  );
}

export default App;
