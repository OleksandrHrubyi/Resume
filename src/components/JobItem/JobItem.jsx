import styles from "./jobItem.module.css";
import { FormattedMessage } from "react-intl";
import React from "react";

function JobItem() {
  const jobKey = ["Alpari", "Interior", "InteriorHead", "Entrepreneur", "WebPortTechnology"];

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
               {job === "Entrepreneur" && <a className={styles.jobLink} href="http://www.alpari.ua" rel="noreferrer" target="_blank">alpari.ua</a>}
              
                <span className={styles.years}>
                  {" "}
                  / <FormattedMessage id={`${job}.years`} />
                </span>
              </span>
              <div>{job.info && <FormattedMessage id={`${job}.info`} /> } </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default JobItem;
