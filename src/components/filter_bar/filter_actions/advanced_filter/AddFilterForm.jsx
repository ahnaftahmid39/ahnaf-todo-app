import { useState } from "react";
import { filterableFields, possibleValues } from "../../../../utils/constants";
import styles from "./AddFilterForm.module.scss";
import useTodoStore from "../../../../store/todoStore";

const AddFilterForm = () => {
  const [fieldName, setFieldName] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  const [include, setInclude] = useState(true);

  const addFilter = useTodoStore((state) => state.addFilter);
  const filters = useTodoStore((state) => state.filters);
  const usedFilterFields = filters.map((f) => f.fieldName);

  const handleSubmit = (e) => {
    e.preventDefault();
    addFilter(fieldName, fieldValue, include);
  };

  const handleFieldNameChange = (e) => {
    setFieldName(e.target.value);
  };
  const handleFieldValueChange = (e) => {
    setFieldValue(e.target.value);
  };
  const handleIncludeChange = (e) => {
    if (e.target.value === "Include") {
      setInclude(true);
    } else if (e.target.value === "Exclude") {
      setInclude(false);
    }
  };

  const handleCancel = () => {
    setFieldName("");
    setFieldValue("");
    setInclude(true);
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
          {Object.values(filterableFields).map((field, idx) => {
            if (usedFilterFields.includes(field)) return null;
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
          className={styles["select-value"]}
          disabled={fieldName === ""}
          onChange={handleFieldValueChange}
          defaultValue={"default"}
        >
          <option value="default" disabled>
            Select Value
          </option>
          {fieldName !== "" &&
            possibleValues[fieldName].map((value, idx) => (
              <option value={value} key={idx}>
                {value}
              </option>
            ))}
        </select>
      </div>
      <div>
        <select
          className={styles["select-include"]}
          onChange={handleIncludeChange}
          disabled={fieldName === ""}
          defaultValue={"default"}
        >
          <option value="default" disabled>
            Include/Exclude
          </option>
          {["Include", "Exclude"].map((value, idx) => (
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

export default AddFilterForm;
