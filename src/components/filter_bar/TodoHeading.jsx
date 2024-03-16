import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import styles from "./TodoHeading.module.scss";
import useTodoStore from "../../store/todoStore";

const SORTING_ORDERS = {
  ASC: "asc",
  DESC: "desc",
};

const TodoHeading = ({ fieldName, label = "", className = "" }) => {
  const setOneSorter = useTodoStore((state) => state.setOneSorter);

  const handleAscendingSort = () => {
    setOneSorter(fieldName, SORTING_ORDERS.ASC);
  };

  const handleDescendingSort = () => {
    setOneSorter(fieldName, SORTING_ORDERS.DESC);
  };
  return (
    <>
      <div className={`${styles["todo-heading-wrapper"]} ${className}`}>
        {label}
        <div className={styles["buttons-wrapper"]}>
          <button onClick={handleAscendingSort}>
            <CiCircleChevUp size={24} />
          </button>
          <button onClick={handleDescendingSort}>
            <CiCircleChevDown size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoHeading;
