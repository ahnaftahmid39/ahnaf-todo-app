import { useState } from "react";
import Modal from "../modal/Modal";
import styles from "./ControlBar.module.scss";
import AddTodo from "../add_todo/AddTodo";

const ControlBar = () => {
  const [addNewModalOpen, setAddNewModalOpen] = useState(false);

  const closeAddNewModal = () => {
    setAddNewModalOpen(false);
  };

  const openAddNewModal = () => {
    setAddNewModalOpen(true);
  };

  return (
    <div className={styles["control-bar"]}>
      <button onClick={openAddNewModal}>new</button>
      <Modal open={addNewModalOpen} handleClose={closeAddNewModal}>
        <AddTodo />
      </Modal>
      <button>trash</button>
      <button>theme</button>
      <button>shortcuts</button>
    </div>
  );
};

export default ControlBar;
