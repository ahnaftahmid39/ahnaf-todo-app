import styles from './HeadingsBar.module.scss'

const HeadingsBar = () => {
  return (
    <div className={styles['headings-wrapper']}>
      <div>SN</div>
      <div>title</div>
      <div>Description</div>
      <div>Status</div>
      <div>Priority</div>
      <div>Creation Time</div>
      <div>Actions</div>
    </div>
  );
};

export default HeadingsBar;
