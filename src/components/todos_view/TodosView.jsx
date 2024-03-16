import { getDateTime } from "../../utils/date";
import styles from "./TodosView.module.scss";
import { CiMenuKebab } from "react-icons/ci";
import useTodoStore from "../../store/todoStore";
import { todoCompare } from "../../utils/comparators";

const TodosView = () => {
  const todos = useTodoStore((state) => state.todos);
  const filters = useTodoStore((state) => state.filters);
  const sorters = useTodoStore((state) => state.sorters);

  let finalTodos = [...todos];
  filters.forEach((fltr) => {
    finalTodos = finalTodos.filter((todo) => {
      return (
        fltr["include"] === (fltr["fieldValue"] === todo[fltr["fieldName"]])
      );
    });
  });

  if (sorters.length > 0)
    finalTodos.sort((todoA, todoB) => {
      let sorterIndex = 0;
      while (
        sorterIndex < sorters.length - 1 &&
        todoCompare(todoA, todoB, sorters[sorterIndex]) === 0
      )
        sorterIndex++;

      const orderMap = {
        asc: 1,
        desc: -1,
      };
      return (
        orderMap[sorters[sorterIndex]["order"]] *
        (todoCompare(todoA, todoB, sorters[sorterIndex]) === 0)
      );
    });

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
