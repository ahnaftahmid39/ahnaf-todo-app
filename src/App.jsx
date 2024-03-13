import { useState } from "react";
import "./scss/App.scss";
import ControlBar from "./components/control_bar/ControlBar";
import TodosView from "./components/todos_view/TodosView";

const mockData = [
  {
    id: "f1fd83e818a8838138",
    title: "Note 3",
    description: "Note description AAAAAAAAAAAA",
    priority: 2,
    status: "pending",
    createdAt: "3/12/2024, 11:20:23 AM",
    updatedAt: "4/12/2024, 11:20:23 AM",
  },
  {
    id: "d2fd83e811v8838138",
    title: "Note 3",
    description: "Note description",
    priority: 2,
    status: "pending",
    createdAt: "3/12/2024, 11:20:23 AM",
    updatedAt: "4/12/2024, 11:20:23 AM",
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  return (
    <>
      <div className="wrapper">
        <ControlBar />
        <TodosView todos={todos} />
      </div>
    </>
  );
}

export default App;
