import styles from "./AdvancedFilter.module.scss";
import { useState } from "react";
import Modal from "../../../modal/Modal";
import AddFilterForm from "./AddFilterForm";
import ViewFilters from "./ViewFilters";
import AddSorterForm from "./AddSorterForm";
import ViewSorters from "./ViewSorters";

const AdvancedFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>AdvancedFilter</button>
      <Modal open={isOpen} handleClose={closeModal}>
        <div className={styles["wrapper"]}>
          <div className={styles["filter-wrapper"]}>
            <div>Filters</div>
            <AddFilterForm />
            <ViewFilters />
          </div>
          <div className={styles["sorter-wrapper"]}>
            <AddSorterForm />
            <ViewSorters />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdvancedFilter;
