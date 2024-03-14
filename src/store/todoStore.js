import { create } from "zustand";
import * as PersistTodo from "../utils/persistStore";

const useTodoStore = create((set, get) => ({
  todos: [],
  setTodos: (todos) => {
    set({ todos });
    PersistTodo.setTodos(todos);
  },
  addTodo: (todo) => {
    set((state) => ({ todos: [...state.todos, todo] }));
    PersistTodo.setTodos(get().todos);
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
    PersistTodo.setTodos(get().todos);
  },
  updateTodo: (id, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      ),
    })),
}));

export default useTodoStore;
