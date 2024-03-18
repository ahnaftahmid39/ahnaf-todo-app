import useTodoStore from "../../../../store/todoStore";
import styles from "./ViewSorters.module.scss";
const ViewSorters = () => {
  const sorters = useTodoStore((state) => state.sorters);
  const removeSorter = useTodoStore((state) => state.removeSorter);

  return (
    <div className={styles["view-sorters-wrapper"]}>
      {sorters.map((sorter, idx) => {
        const handleRemove = () => {
          removeSorter(idx);
        };
        return (
          <div className={styles["sorter-details-wrapper"]} key={idx}>
            <div className={styles["sorter-values"]}>
              <div>
                <label>Sorting Field:</label>
                <span>{sorter.fieldName}</span>
              </div>
              <div>
                <label>Order:</label>
                <span>{sorter.order}</span>
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
