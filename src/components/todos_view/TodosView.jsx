import { useState } from "react";
import { getDateTime } from "../../utils/date";
import styles from "./TodosView.module.scss";
import { CiMenuKebab } from "react-icons/ci";
import useTodoStore from "../../store/todoStore";

const TodosView = () => {
  const todos = useTodoStore((state) => state.todos);

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");

  let finalTodos = [...todos];
  if (filterField !== "" && filterValue !== "") {
    finalTodos = finalTodos.filter((todo) => {
      return todo[filterField] === filterValue;
    });
  }

  if (sortBy !== "") {
    finalTodos.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
  }

  return (
    <div className={styles["todos-view"]}>
      {finalTodos.map((todo, idx) => {
        const createdAt = new Date(todo.createdAt);
        const timeDiff = getDateTime(createdAt);
        return (
          <div className={styles["todo-row"]} key={todo.id}>
            <div className={styles["serial-no"]}>{idx + 1}</div>
            <div className={styles["title"]}>{todo.title}</div>
            <div className={styles["description"]}>{todo.description}</div>
            <div className={styles["status"]}>{todo.status}</div>
            <div className={styles["priority"]}>{todo.priority}</div>
            <div className={styles["creation-time"]}>{timeDiff}</div>
            <div className={styles["actions"]}>
              <CiMenuKebab />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodosView;
