import styles from "./Warning.module.scss";

const Warning = ({
  warningMessage = "",
  firstBtnLabel = "Yes",
  firstBtnOnClick = () => {},
  secondBtnLabel = "No",
  secondBtnOnClick = () => {},
}) => {
  return (
    <div className={styles["warning-wrapper"]}>
      <div className={styles["warning-message"]}>{warningMessage}</div>
      <div className={styles["warning-action-buttons"]}>
        <button onClick={firstBtnOnClick}>{firstBtnLabel}</button>
        <button onClick={secondBtnOnClick}>{secondBtnLabel}</button>
      </div>
    </div>
  );
};

export default Warning;
