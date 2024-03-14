export const TODO_KEY = "todos";

export const getTodos = () => {
  const todos = localStorage.getItem(TODO_KEY);
  return todos ? JSON.parse(todos) : [];
};

export const setTodos = (todos) => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
};

export const addTodo = (todo) => {
  const todos = getTodos();
  todos.push(todo);
  setTodos(todos);
};

export const deleteTodo = (id) => {
  const todos = getTodos();
  const newTodos = todos.filter((todo) => todo.id !== id);
  setTodos(newTodos);
};

export const updateTodo = (id, updatedTodo) => {
  const todos = getTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  todos[index] = updatedTodo;
  setTodos(todos);
};
