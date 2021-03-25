import styles from "./jobItem.module.css";
import { FormattedMessage } from "react-intl";
import React from "react";

function JobItem() {
  const jobKey = ["Alpari", "Interior", "InteriorHead", "Entrepreneur"];

  return (
    <ul>
      {jobKey.map((job) => {
        return (
          <li key={job} className={styles.item}>
            <div className={styles.mark}>
              <span className="material-icons md-36">check</span>
            </div>
            <div className={styles.jobBox}>
              <h4 className={styles.jobtitle}>
                <FormattedMessage id={`${job}.name`} />
              </h4>
              <span className={styles.proftitle}>
                <FormattedMessage id={`${job}.prof`} />
                <span className={styles.years}>
                  {" "}
                  / <FormattedMessage id={`${job}.years`} />
                </span>
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default JobItem;
