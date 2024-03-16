import { useState } from "react";
import { SORTING_ORDERS, fields } from "../../../../utils/constants";
import useTodoStore from "../../../../store/todoStore";
import styles from "./AddSorterForm.module.scss";

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
    <form onSubmit={handleSubmit}>
      <div>
        <select
          defaultValue={"Select Field"}
          className={styles["select-field"]}
          onChange={handleFieldNameChange}
        >
          <option value="Select Field" disabled>
            Select Field
          </option>
          {sortableFields.map((field, idx) => {
            if (usedSorterFields.includes(field)) return null;
            return (
              <option value={field} key={idx}>
                {field}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select
          className={styles["select-order"]}
          onChange={handleOrderChange}
          defaultValue={"default"}
        >
          <option value="default" disabled>
            Select Order
          </option>
          {Object.values(SORTING_ORDERS).map((value, idx) => (
            <option value={value} key={idx}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddSorterForm;
