import { useHotkeys } from "react-hotkeys-hook";
import useTodoStore from "../../store/todoStore";
import { fields, statusOptionsEnum } from "../../utils/constants";
import styles from "./FilterBar.module.scss";
import SearchBar from "./search_bar/SearchBar";
import FilterButton from "./filter_actions/FilterButton";
import AdvancedFilter from "./filter_actions/advanced_filter/AdvancedFilter";
import ClearAllFilter from "./filter_actions/ClearAllFilter";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const FilterBar = () => {
  const [collapsed, setIsCollapsed] = useState(true);

  const setOneFilter = useTodoStore((state) => state.setOneFilter);
  useHotkeys("alt+p", () => {
    setOneFilter(fields.status, statusOptionsEnum.PENDING);
  });
  useHotkeys("alt+i", () => {
    setOneFilter(fields.status, statusOptionsEnum.INPROGRESS);
  });
  return (
    <div data-collapsed={collapsed} className={styles["filter-action-wrapper"]}>
      <div className={styles["search-collapse-wrapper"]}>
        <SearchBar />
        {collapsed ? (
          <button
            onClick={() => setIsCollapsed(false)}
            className={styles["expand-button"]}
          >
            <CiFilter size={32} />
          </button>
        ) : (
          <button
            onClick={() => setIsCollapsed(true)}
            className={styles["collapse-button"]}
          >
            <IoIosClose size={32} />
          </button>
        )}
      </div>
      <div className={styles["action-buttons-wrapper"]}>
        <FilterButton
          filteringField={fields.status}
          label={statusOptionsEnum.PENDING}
          filterValue={statusOptionsEnum.PENDING}
        />
        <FilterButton
          filteringField={fields.status}
          label={statusOptionsEnum.INPROGRESS}
          filterValue={statusOptionsEnum.INPROGRESS}
        />
        <AdvancedFilter />
        <ClearAllFilter />
      </div>
    </div>
  );
};

export default FilterBar;
