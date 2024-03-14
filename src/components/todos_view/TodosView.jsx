import { useState } from "react";
import { getDateTime } from "../../utils/date";
import styles from "./TodosView.module.scss";
import { GoArrowUp, GoArrowDown } from "react-icons/go";

const TodosView = ({
  todos = [
    {
      id: "",
      title: "",
      description: "",
      priority: 2,
      status: "pending",
      createdAt: "",
      updatedAt: "",
    },
  ],
}) => {
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
      <table>
        <thead>
          <tr>
            <th>
              <div className={styles["todos-view-header"]}>
                <GoArrowUp />
                Title
                <GoArrowDown />
              </div>
            </th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {finalTodos.map((todo) => {
            const createdAt = new Date(todo.createdAt);
            const timeDiff = getDateTime(createdAt);

            return (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.priority}</td>
                <td>{todo.status}</td>
                <td>{timeDiff}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodosView;
