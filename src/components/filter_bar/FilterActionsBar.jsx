import AdvancedFilter from "./AdvancedFilter";
import ClearAllFilter from "./ClearAllFilter";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import { statusOptionsEnum } from "../../utils/constants";
import { fields } from "../../utils/constants";

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
