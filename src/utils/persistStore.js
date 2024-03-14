const TODO_KEY = "todos";

const getTodos = () => {
  const todos = localStorage.getItem(TODO_KEY);
  return todos ? JSON.parse(todos) : [];
};

const setTodos = (todos) => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
};

export { TODO_KEY, getTodos, setTodos };
