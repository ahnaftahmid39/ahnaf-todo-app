import { useHotkeys } from "react-hotkeys-hook";
import useTodoStore from "../../store/todoStore";
import { fields, statusOptionsEnum } from "../../utils/constants";
import styles from './FilterBar.module.scss';
import SearchBar from "./search_bar/SearchBar";
import FilterButton from "./filter_actions/FilterButton";
import AdvancedFilter from "./filter_actions/advanced_filter/AdvancedFilter";
import ClearAllFilter from "./filter_actions/ClearAllFilter";

const FilterBar = () => {
  const setOneFilter = useTodoStore((state) => state.setOneFilter);
  useHotkeys("alt+p", () => {
    setOneFilter(fields.status, statusOptionsEnum.PENDING);
  });
  useHotkeys("alt+i", () => {
    setOneFilter(fields.status, statusOptionsEnum.INPROGRESS);
  });
  return (
    <div className={styles["filter-action-wrapper"]}>
      <SearchBar />
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
