import { create } from "zustand";
import * as PersistTodo from "../utils/persistStore";

const useTodoStore = create((set, get) => ({
  todos: [],
  filters: [],
  sorters: [],
  searchText: "",

  setSearchText: (search) => {
    set(() => ({ searchText: search }));
  },

  // TODO: make this function arg object
  addFilter: (fieldName = "status", fieldValue = "pending", include = true) => {
    set((state) => ({
      filters: [...state.filters, { fieldName, fieldValue, include }],
    }));
  },
  removeFilter: (idx) => {
    set((state) => {
      return { filters: state.filters.filter((_, i) => idx !== i) };
    });
  },
  // TODO: make this function arg object
  setOneFilter: (
    fieldName = "status",
    fieldValue = "pending",
    include = true
  ) => {
    set(() => ({
      filters: [{ fieldName, fieldValue, include }],
    }));
  },

  clearFilters: () => {
    set(() => ({
      filters: [],
    }));
  },
  clearSorters: () => {
    set(() => ({
      sorters: [],
    }));
  },
  // TODO: make this function arg object
  addSorter: (fieldName = "priority", order = "asc") => {
    set((state) => ({
      sorters: [...state.sorters, { fieldName, order }],
    }));
  },
  removeSorter: (idx) => {
    set((state) => ({
      sorters: state.sorters.filter((_, i) => idx !== i),
    }));
  },
  // TODO: make this function arg object
  setOneSorter: (fieldName = "priority", order = "asc") => {
    set(() => ({
      sorters: [{ fieldName, order }],
    }));
  },

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
  updateTodo: (id, updatedTodo) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      ),
    }));
    PersistTodo.setTodos(get().todos);
  },
}));

export default useTodoStore;
