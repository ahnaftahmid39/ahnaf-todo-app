import { useHotkeys } from "react-hotkeys-hook";
import useTodoStore from "../../../store/todoStore";

const ClearAllFilter = () => {
  const clearFilters = useTodoStore((state) => state.clearFilters);
  const clearSorters = useTodoStore((state) => state.clearSorters);
  const handleClearAllFilters = () => {
    clearFilters();
    clearSorters();
  };

  useHotkeys("alt+m", () => {
    handleClearAllFilters();
  });
  return (
    <>
      <button onClick={handleClearAllFilters}>Reset</button>
    </>
  );
};

export default ClearAllFilter;
