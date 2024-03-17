import { useEffect } from "react";
import styles from "./sass/App.module.scss";
import ControlBar from "./components/control_bar/ControlBar";
import TodosView from "./components/todos_view/TodosView";
import { getTodos } from "./utils/persistStore";
import useTodoStore from "./store/todoStore";
import { useThemeStore } from "./store/themeStore";
import FilterBar from "./components/filter_bar/FilterBar";

function App() {
  useEffect(() => {
    const todosFromLS = getTodos();
    if (todosFromLS) {
      useTodoStore.getState().setTodos(todosFromLS);
    }
  }, []);

  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    if (window && window.document) {
      document.getElementById("root").classList = `theme-${theme}`;
      document.getElementById("portal").classList = `theme-${theme}`;
    }
  }, [theme]);

  return (
    <>
      <div className={styles["wrapper"]}>
        <ControlBar />
        <FilterBar />
        <TodosView />
      </div>
    </>
  );
}

export default App;
