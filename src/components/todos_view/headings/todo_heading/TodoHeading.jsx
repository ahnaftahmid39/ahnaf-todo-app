import styles from "./TodoHeading.module.scss";
import useTodoStore from "../../../../store/todoStore";
import { SORTING_ORDERS } from "../../../../utils/constants";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const TodoHeading = ({ fieldName, label = "", className = "", sortable }) => {
  const setOneSorter = useTodoStore((state) => state.setOneSorter);

  const handleAscendingSort = () => {
    setOneSorter(fieldName, SORTING_ORDERS.ASC);
  };

  const handleDescendingSort = () => {
    setOneSorter(fieldName, SORTING_ORDERS.DESC);
  };
  return (
    <div className={`${className}`}>
      <div className={styles["todo-heading-wrapper"]}>
        {label}
        <div
          className={styles["buttons-wrapper"]}
          data-not-sortable={!sortable}
        >
          <button
            role="button"
            className={styles["left"]}
            onClick={handleAscendingSort}
          >
            <IoIosArrowUp />
          </button>
          <button
            role="button"
            className={styles["right"]}
            onClick={handleDescendingSort}
          >
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoHeading;
