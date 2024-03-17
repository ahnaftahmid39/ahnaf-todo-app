import formStyles from "./FormUI.module.scss";
import { HiOutlineSelector } from "react-icons/hi";
import { useEffect, useRef } from "react";

const Select = ({
  label,
  fieldName,
  defaultValue,
  options,
  onChangeHandler,
  resetCounter,
}) => {
  const select = useRef(null);
  useEffect(() => {
    if (select && select.current) {
      select.current.value = defaultValue;
    }
  }, [resetCounter, defaultValue]);
  return (
    <div className={`${formStyles["wrapper"]}`}>
      <label htmlFor={fieldName}>{label}:</label>
      <div className={formStyles["custom-select"]}>
        <select
          ref={select}
          id={fieldName}
          name={fieldName}
          defaultValue={defaultValue}
          onChange={onChangeHandler}
        >
          {options.map((x, i) => (
            <option key={i} value={x}>
              {x}
            </option>
          ))}
        </select>
        <span className={formStyles["select-custom-arrow"]}>
          <HiOutlineSelector size={20} />
        </span>
      </div>
    </div>
  );
};

export default Select;
