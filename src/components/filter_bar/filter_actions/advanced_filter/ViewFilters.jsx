import useTodoStore from "../../../../store/todoStore";

const ViewFilters = () => {
  const filters = useTodoStore((state) => state.filters);
  const removeFilter = useTodoStore((state) => state.removeFilter);

  return (
    <div>
      {filters.map((fltr, idx) => {
        const handleRemove = () => {
          removeFilter(idx);
        };
        return (
          <div key={idx}>
            <div>
              <div>
                <div>Selected Field:</div>
                <div>{fltr.fieldName}</div>
              </div>
              <div>
                <div>Selected Value:</div>
                <div>{fltr.fieldValue}</div>
              </div>
              <div>
                <div>Include/Exclude:</div>
                <div>{fltr.include ? "Include" : "Exclude"}</div>
              </div>
            </div>
            <div>
              <button onClick={handleRemove}>Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewFilters;
