import styles from "../MainInfo/mainInfo.module.css";

function MainInfo({ name }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
    </div>
  );
}

export default MainInfo;
