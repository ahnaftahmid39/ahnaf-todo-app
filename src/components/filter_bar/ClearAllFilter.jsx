const ClearAllFilter = () => {
  const handleClearAllFilters = () => {
    console.log("Cleared all filters");
  };
  return (
    <>
      <button onClick={handleClearAllFilters}>Clear all filter</button>
    </>
  );
};

export default ClearAllFilter;
