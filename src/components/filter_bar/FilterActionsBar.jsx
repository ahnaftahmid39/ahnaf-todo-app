import AdvancedFilter from "./AdvancedFilter";
import ClearAllFilter from "./ClearAllFilter";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import { statusOptionsEnum } from "../../utils/contants";

const FilterActionsBar = () => {
  return (
    <div>
      <SearchBar />
      <FilterButton label={statusOptionsEnum.PENDING} />
      <FilterButton label={statusOptionsEnum.INPROGRESS}/>
      <AdvancedFilter />
      <ClearAllFilter />
    </div>
  );
};

export default FilterActionsBar;
