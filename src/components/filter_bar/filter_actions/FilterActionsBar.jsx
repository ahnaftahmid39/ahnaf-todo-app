import { useHotkeys } from "react-hotkeys-hook";
import { fields, statusOptionsEnum } from "../../../utils/constants";
import SearchBar from "../search_bar/SearchBar";
import ClearAllFilter from "./ClearAllFilter";
import FilterButton from "./FilterButton";
import AdvancedFilter from "./advanced_filter/AdvancedFilter";
import useTodoStore from "../../../store/todoStore";

const FilterActionsBar = () => {
  const setOneFilter = useTodoStore((state) => state.setOneFilter);
  useHotkeys("alt+p", () => {
    setOneFilter(fields.status, statusOptionsEnum.PENDING);
  });
  useHotkeys("alt+i", () => {
    setOneFilter(fields.status, statusOptionsEnum.INPROGRESS);
  });
  return (
    <div>
      <SearchBar />
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
  );
};

export default FilterActionsBar;
