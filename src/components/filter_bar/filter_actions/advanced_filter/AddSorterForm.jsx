import { useState } from "react";
import { SORTING_ORDERS, fields } from "../../../../utils/constants";
import useTodoStore from "../../../../store/todoStore";
import styles from "./AddSorterForm.module.scss";
import Select from "../../../form_ui/Select";

const sortableFields = [
  fields.createdAt,
  fields.description,
  fields.priority,
  fields.title,
  fields.status,
];

const AddSorterForm = () => {
  const [fieldName, setFieldName] = useState("");
  const [order, setOrder] = useState(SORTING_ORDERS.ASC);

  const addSorter = useTodoStore((state) => state.addSorter);
  const sorters = useTodoStore((state) => state.sorters);
  const usedSorterFields = sorters.map((s) => s.fieldName);

  const handleSubmit = (e) => {
    e.preventDefault();
    addSorter(fieldName, order);
  };

  const handleFieldNameChange = (e) => {
    setFieldName(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };
  const handleCancel = () => {
    setFieldName("");
    setOrder(SORTING_ORDERS.ASC);
  };

  return (
    <form className={styles["sorter-form"]} onSubmit={handleSubmit}>
      <Select
        className={styles["select-field"]}
        onChange={handleFieldNameChange}
        label={"Select Field"}
      >
        {sortableFields.map((field, idx) => {
          return (
            <option
              disabled={usedSorterFields.includes(field)}
              value={field}
              key={idx}
            >
              {field}
            </option>
          );
        })}
      </Select>
      <Select
        className={styles["select-order"]}
        onChange={handleOrderChange}
        label={"Select Order"}
      >
        {Object.values(SORTING_ORDERS).map((value, idx) => (
          <option value={value} key={idx}>
            {value}
          </option>
        ))}
      </Select>
      <div className={styles['buttons-wrapper']}>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddSorterForm;
