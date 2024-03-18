import styles from "./AdvancedFilter.module.scss";
import { useState } from "react";
import Modal from "../../../modal/Modal";
import AddFilterForm from "./AddFilterForm";
import ViewFilters from "./ViewFilters";
import AddSorterForm from "./AddSorterForm";
import ViewSorters from "./ViewSorters";
import { useHotkeys } from "react-hotkeys-hook";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AdvancedFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useHotkeys(
    "alt+l",
    () => {
      openModal();
    },
    { preventDefault: true }
  );

  return (
    <>
      <button onClick={openModal}>Advanced Filter</button>
      <Modal open={isOpen} handleClose={closeModal}>
        <div className={styles["wrapper"]}>
          <div className={styles["filter-title-close-wrapper"]}>
            <label>Advanced Fitlers</label>
            <button onClick={closeModal}>
              <IoIosCloseCircleOutline size={24} />
            </button>
          </div>
          <div className={styles["filter-wrapper"]}>
            <label>Filters:</label>
            <AddFilterForm />
            <ViewFilters />
          </div>
          <div className={styles["sorter-wrapper"]}>
            <label>Sorters:</label>
            <AddSorterForm />
            <ViewSorters />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdvancedFilter;
