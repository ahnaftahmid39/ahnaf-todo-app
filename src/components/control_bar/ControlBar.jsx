import styles from "./ControlBar.module.scss";

const ControlBar = () => {
  return (
    <div className={styles["control-bar"]}>
      <button>new</button>
      <button>trash</button>
      <button>theme</button>
      <button>shortcuts</button>
    </div>
  );
};

export default ControlBar;
