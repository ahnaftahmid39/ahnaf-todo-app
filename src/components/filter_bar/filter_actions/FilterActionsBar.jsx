import { fields, statusOptionsEnum } from "../../../utils/constants";
import SearchBar from "../search_bar/SearchBar";
import ClearAllFilter from "./ClearAllFilter";
import FilterButton from "./FilterButton";
import AdvancedFilter from "./advanced_filter/AdvancedFilter";

const FilterActionsBar = () => {
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
