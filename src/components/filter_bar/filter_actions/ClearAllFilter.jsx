import useTodoStore from "../../../store/todoStore";

const ClearAllFilter = () => {
  const clearFilters = useTodoStore((state) => state.clearFilters);
  const handleClearAllFilters = () => {
    clearFilters();
  };
  return (
    <>
      <button onClick={handleClearAllFilters}>Clear all filter</button>
    </>
  );
};

export default ClearAllFilter;
