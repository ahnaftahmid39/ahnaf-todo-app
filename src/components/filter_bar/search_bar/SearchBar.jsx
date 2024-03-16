import { useRef } from "react";
import styles from "./SearchBar.module.scss";
import { CiSearch } from "react-icons/ci";
import useTodoStore from "../../../store/todoStore";
const SearchBar = ({ placeholder = "Search" }) => {
  const setSearchText = useTodoStore((state) => state.setSearchText);
  const inputRef = useRef(null);
  const handleSearch = () => {
    if (inputRef && inputRef.current) {
      setSearchText(inputRef.current.value);
    }
  };

  const handleEnterKey = (e) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  const handleOnChange = () => {
    if (inputRef && inputRef.current) {
      setSearchText(inputRef.current.value);
    }
  };
  return (
    <div className={styles["searchbar-container"]}>
      <input
        ref={inputRef}
        // comment out below to trigger search on enter or click
        onChange={handleOnChange}
        onKeyDown={handleEnterKey}
        placeholder={placeholder}
        className={styles["searchbar-input"]}
      ></input>
      <button
        type="button"
        onClick={handleSearch}
        className={styles["searchbar-btn"]}
      >
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
