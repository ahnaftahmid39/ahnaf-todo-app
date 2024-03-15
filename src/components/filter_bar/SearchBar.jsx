import styles from "./SearchBar.module.scss";

const SearchBar = ({
  text,
  setText,
  handleEmptyInput,
  handleSearch,
  placeholder = "Search",
}) => {
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.target.value == "") {
      handleEmptyInput();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={styles["searchbar-container"]}>
      <input
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={styles["searchbar-input"]}
      ></input>
      <button
        type="button"
        onClick={handleSearch}
        className={styles["searchbar-btn"]}
      >
        ICON
      </button>
    </div>
  );
};

export default SearchBar;
