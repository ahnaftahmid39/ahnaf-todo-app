import { useState } from "react";
import { filterableFields, possibleValues } from "../../../../utils/constants";
import styles from "./AddFilterForm.module.scss";
import useTodoStore from "../../../../store/todoStore";
import Select from "../../../form_ui/Select";

const AddFilterForm = () => {
  const [fieldName, setFieldName] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  const [include, setInclude] = useState(true);

  const addFilter = useTodoStore((state) => state.addFilter);
  const filters = useTodoStore((state) => state.filters);
  const usedFilterFields = filters.map((f) => f.fieldName);

  const resetForm = () => {
    setFieldName("");
    setFieldValue("");
    setInclude(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFilter(fieldName, fieldValue, include);
    resetForm();
  };

  const handleFieldNameChange = (e) => {
    console.log(e.target.value);
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
    resetForm();
  };

  if (usedFilterFields.length == filterableFields.length) return null;
  return (
    <form className={styles['filter-form']} onSubmit={handleSubmit}>
      <div>
        <Select
          label={"Select Field"}
          className={styles["select-field"]}
          onChangeHandler={handleFieldNameChange}
        >
          {Object.values(filterableFields).map((field, idx) => {
            return (
              <option
                disabled={usedFilterFields.includes(field)}
                value={field}
                key={idx}
              >
                {field}
              </option>
            );
          })}
        </Select>
      </div>
      <div>
        <Select
          className={styles["select-value"]}
          disabled={fieldName === ""}
          onChangeHandler={handleFieldValueChange}
          label={"Select Value"}
        >
          {fieldName !== "" &&
            possibleValues[fieldName].map((value, idx) => (
              <option value={value} key={idx}>
                {value}
              </option>
            ))}
        </Select>
      </div>
      <div>
        <Select
          className={styles["select-include"]}
          onChangeHandler={handleIncludeChange}
          label={"Include/Exclude"}
          disabled={fieldName === ""}
        >
          {["Include", "Exclude"].map((value, idx) => (
            <option value={value} key={idx}>
              {value}
            </option>
          ))}
        </Select>
      </div>
      <div className={styles["add-filter-form-buttons"]}>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddFilterForm;
