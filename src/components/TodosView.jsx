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
    <div className="todos-view">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>

        {todos.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.priority}</td>
              <td>{todo.status}</td>
              <td>{todo.createdAt}</td>
              <td>{todo.updatedAt}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TodosView;
