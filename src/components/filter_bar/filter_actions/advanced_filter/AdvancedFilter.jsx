import { useState } from "react";
import Modal from "../../../modal/Modal";

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
        <div>Advanced Controls for filtering</div>
      </Modal>
    </>
  );
};

export default AdvancedFilter;
