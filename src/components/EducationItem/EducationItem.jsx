import { FormattedMessage } from "react-intl";
import styles from "./educationItem.module.css";

function educationItem() {
  const educationKey = ["university", "english", "it"];

  return (
    <ul className={styles.educationList}>
      {educationKey.map((education) => {
        return (
          <li key={education} className={styles.item}>
            <div className={styles.jobBox}>
              <h4 className={styles.jobtitle}>
                <FormattedMessage id={`${education}.name`} />
              </h4>
              <span className={styles.proftitle}>
                <FormattedMessage id={`${education}.prof`} />
                <span className={styles.years}>
                  {" "}
                  /<FormattedMessage id={`${education}.years`} />
                </span>
              </span>
              <span className={styles.jobInfo}>
                <FormattedMessage id={`${education}.defin`} />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default educationItem;
