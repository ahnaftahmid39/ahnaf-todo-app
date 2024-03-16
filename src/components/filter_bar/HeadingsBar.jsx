import styles from "./HeadingsBar.module.scss";

const HeadingsBar = () => {
  return (
    <div className={styles["headings-wrapper"]}>
      <div className={styles["serial-no"]}>SN</div>
      <div className={styles["title"]}>title</div>
      <div className={styles["description"]}>Description</div>
      <div className={styles["status"]}>Status</div>
      <div className={styles["priority"]}>Priority</div>
      <div className={styles["creation-time"]}>Creation Time</div>
      <div className={styles["actions"]}>Actions</div>
    </div>
  );
};

export default HeadingsBar;
