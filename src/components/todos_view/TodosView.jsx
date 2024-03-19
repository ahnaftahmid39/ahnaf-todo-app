import { fromNow } from "../../utils/date";
import styles from "./TodosView.module.scss";
import useTodoStore from "../../store/todoStore";
import { todoCompare } from "../../utils/comparators";
import TodoActions from "./todo_actions/TodoActions";
import { fields, statusColorMapper } from "../../utils/constants";
import HeadingsBar from "./headings/HeadingsBar";
import PriorityStars from "./stars/PriorityStars";

const TodosView = () => {
  const todos = useTodoStore((state) => state.todos);
  const filters = useTodoStore((state) => state.filters);
  const sorters = useTodoStore((state) => state.sorters);
  const searchText = useTodoStore((state) => state.searchText);

  let finalTodos = [...todos];

  // handle multiple filters
  filters.forEach((fltr) => {
    finalTodos = finalTodos.filter((todo) => {
      return (
        fltr["include"] === (fltr["fieldValue"] === todo[fltr["fieldName"]])
      );
    });
  });

  // able to handle multi-level comparator
  if (sorters.length > 0) {
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
        todoCompare(todoA, todoB, sorters[sorterIndex])
      );
    });
  }

  // handle search
  let search = searchText.trim();
  if (search !== "")
    finalTodos = finalTodos.filter((todo) => {
      const combinedString =
        todo[fields.title] + todo[fields.description] + todo[fields.status];
      if (combinedString.includes(search)) {
        return true;
      }

      return false;
    });

  return (
    <div className={styles["todos-wrapper"]}>
      <HeadingsBar className={styles["todo-header"]} />
      <div className={styles["todos-view"]}>
        {todos.length === 0 && (
          <span className={styles["no-todos"]}>
            No Todos to show, Add todos by clicking <kbd>+</kbd> button below or
            pressing <kbd>shift</kbd> + <kbd>a</kbd>
          </span>
        )}
        {
          todos.length > 0 && finalTodos.length === 0 && (
            <span className={styles["no-todos"]}>
              No Todos to found, try changing filters or search
            </span>
          )
        }
        {finalTodos.map((todo, idx) => {
          const createdAt = new Date(todo.createdAt);
          const timeDiff = fromNow(createdAt);
          return (
            <div
              className={`${styles["todo-row"]} ${styles["todo-content"]}`}
              key={todo.id}
            >
              <div className={styles["serial"]}>[ {idx + 1} ]</div>
              <div className={styles["title"]}>{todo.title}</div>
              <div className={styles["description"]}>{todo.description}</div>
              <div
                className={styles["status"]}
                style={{
                  color: statusColorMapper[todo.status],
                  backgroundColor: `${statusColorMapper[todo.status]}20`,
                }}
              >
                {todo.status}
              </div>
              <div className={styles["priority"]}>
                <PriorityStars priority={todo.priority} />
              </div>
              <div
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                {timeDiff}
              </div>
              <TodoActions todo={todo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodosView;
