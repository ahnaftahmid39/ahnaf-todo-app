import "./App.css";

const mockData = [
  {
    id: "f1fd83e818a8838138",
    title: "Note 3",
    description: "Note descrition",
    priority: 2,
    status: "pending",
    createdAt: "3/12/2024, 11:20:23 AM",
    updatedAt: "4/12/2024, 11:20:23 AM",
  },
  {
    id: "d2fd83e811v8838138",
    title: "Note 3",
    description: "Note descrition",
    priority: 2,
    status: "pending",
    createdAt: "3/12/2024, 11:20:23 AM",
    updatedAt: "4/12/2024, 11:20:23 AM",
  },
];

function App() {
  const [todos, setTodos] = useState([]);

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
