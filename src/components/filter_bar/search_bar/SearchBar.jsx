import { useRef } from "react";
import styles from "./SearchBar.module.scss";
import { CiSearch } from "react-icons/ci";
import useTodoStore from "../../../store/todoStore";
import { useHotkeys } from "react-hotkeys-hook";

const SearchBar = ({ placeholder = "Search (Ctrl + K)" }) => {
  const setSearchText = useTodoStore((state) => state.setSearchText);
  const inputRef = useRef(null);

  useHotkeys(
    "ctrl+k",
    () => {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    },
    { preventDefault: true }
  );

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
      <button
        type="button"
        onClick={handleSearch}
        className={styles["searchbar-btn"]}
        tabIndex={"-1"}
      >
        <CiSearch size={28} />
      </button>
      <input
        ref={inputRef}
        // comment out below to trigger search on enter or click
        onChange={handleOnChange}
        onKeyDown={handleEnterKey}
        placeholder={placeholder}
        className={styles["searchbar-input"]}
      ></input>
    </div>
  );
};

export default SearchBar;
