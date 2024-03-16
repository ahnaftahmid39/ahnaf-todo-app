import useTodoStore from "../../../store/todoStore";

const ClearAllFilter = () => {
  const clearFilters = useTodoStore((state) => state.clearFilters);
  const clearSorters = useTodoStore((state) => state.clearSorters);
  const handleClearAllFilters = () => {
    clearFilters();
    clearSorters();
  };
  return (
    <>
      <button onClick={handleClearAllFilters}>Clear all filter</button>
    </>
  );
};

export default ClearAllFilter;
