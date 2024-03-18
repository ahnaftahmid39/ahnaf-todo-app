import { CiDatabase } from "react-icons/ci";
import useTodoStore from "../../store/todoStore";
import { useState } from "react";
import { MOCK_TODOS } from "../../utils/mock/mockTodos";
import { useHotkeys } from "react-hotkeys-hook";

const PopulateMockData = () => {
  const addMockTodos = useTodoStore((state) => state.addMockTodos);
  const removeMockTodos = useTodoStore((state) => state.removeMockTodos);
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    if (isAdded) {
      removeMockTodos();
      setIsAdded(false);
    } else {
      addMockTodos(MOCK_TODOS);
      setIsAdded(true);
    }
  };

  useHotkeys("shift + d", handleClick);
  return (
    <>
      <button title="Populate (Toggle) Mock Data" onClick={handleClick}>
        <CiDatabase size={32} />
      </button>
    </>
  );
};

export default PopulateMockData;
