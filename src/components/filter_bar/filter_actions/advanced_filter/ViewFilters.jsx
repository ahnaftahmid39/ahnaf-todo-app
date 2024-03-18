import useTodoStore from "../../../../store/todoStore";
import styles from "./ViewFilters.module.scss";
const ViewFilters = () => {
  const filters = useTodoStore((state) => state.filters);
  const removeFilter = useTodoStore((state) => state.removeFilter);

  return (
    <div className={styles["filter-list-wrapper"]}>
      {filters.map((fltr, idx) => {
        const handleRemove = () => {
          removeFilter(idx);
        };
        return (
          <div className={styles["filter-details-wrapper"]} key={idx}>
            <div className={styles["filter-values"]}>
              <div>
                <label>Selected Field:</label>
                <span>{fltr.fieldName}</span>
              </div>
              <div>
                <label>Selected Value:</label>
                <span>{fltr.fieldValue}</span>
              </div>
              <div>
                <label>Include/Exclude:</label>
                <span>{fltr.include ? "Include" : "Exclude"}</span>
              </div>
            </div>
            <button onClick={handleRemove}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default ViewFilters;
