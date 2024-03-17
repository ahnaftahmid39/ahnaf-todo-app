import FilterActionsBar from "./filter_actions/FilterActionsBar";
import HeadingsBar from "./headings/HeadingsBar";
import styles from './FiltersAndHeadingsBar.module.scss'


const FiltersAndHeadingsBar = () => {
  return (
    <div className={styles['filter-heading-wrapper']}>
      <FilterActionsBar />
      <HeadingsBar />
    </div>
  );
};

export default FiltersAndHeadingsBar;
