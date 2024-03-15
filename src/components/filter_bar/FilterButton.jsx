const FilterButton = ({ label, filteringField, filterValue }) => {
  const handleFilter = () => {
    console.log(`Filtering ${filteringField} = ${filterValue}`);
  };

  return (
    <>
      <button onClick={handleFilter}>{label}</button>
    </>
  );
};

export default FilterButton;
