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
    <div>
      <label htmlFor={fieldName}>{label}</label>
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
    </div>
  );
};

export default Select;
