const Warning = ({
  warningMessage = "",
  firstBtnLabel = "Yes",
  firstBtnOnClick = () => {},
  secondBtnLabel = "No",
  secondBtnOnClick = () => {},
}) => {
  return (
    <div>
      <div>{warningMessage}</div>
      <div>
        <button onClick={firstBtnOnClick}>{firstBtnLabel}</button>
        <button onClick={secondBtnOnClick}>{secondBtnLabel}</button>
      </div>
    </div>
  );
};

export default Warning;
