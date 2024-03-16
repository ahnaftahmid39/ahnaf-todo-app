import useTodoStore from "../../../../store/todoStore";

const ViewSorters = () => {
  const sorters = useTodoStore((state) => state.sorters);
  const removeSorter = useTodoStore((state) => state.removeSorter);

  return (
    <div>
      {sorters.map((sorter, idx) => {
        const handleRemove = () => {
          removeSorter(idx);
        };
        return (
          <div key={idx}>
            <div>
              <div>
                <div>Sorting Field:</div>
                <div>{sorter.fieldName}</div>
              </div>
              <div>
                <div>Order:</div>
                <div>{sorter.order}</div>
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

export default ViewSorters;
