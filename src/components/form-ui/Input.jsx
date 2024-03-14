import { useEffect, useRef } from "react";

const Input = ({
  label,
  fieldName,
  onChangeHandler,
  defaultValue,
  type = "text",
  resetCounter,
  placeholder = "",
}) => {
  const input = useRef(null);
  useEffect(() => {
    if (input && input.current) {
      input.current.value = defaultValue ? defaultValue : "";
    }
  }, [resetCounter, defaultValue]);

  return (
    <div>
      <label htmlFor={fieldName}>{label}:</label>
      <input
        ref={input}
        type={type}
        id={fieldName}
        name={fieldName}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
