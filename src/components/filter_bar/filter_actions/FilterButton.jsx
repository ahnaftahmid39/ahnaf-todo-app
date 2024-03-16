import useTodoStore from "../../../store/todoStore";

const FilterButton = ({ label, filteringField, filterValue }) => {
  const setOneFilter = useTodoStore((state) => state.setOneFilter);
  const handleFilter = () => {
    setOneFilter(filteringField, filterValue);
  };

  return (
    <>
      <button onClick={handleFilter}>{label}</button>
    </>
  );
};

export default FilterButton;
