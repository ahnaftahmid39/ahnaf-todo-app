import { getDateTime } from "../../utils/date";
import styles from "./TodosView.module.scss";

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
  return (
    <div className={styles["todos-view"]}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => {
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
