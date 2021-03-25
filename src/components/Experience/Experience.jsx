import React from "react";
import { FormattedMessage } from "react-intl";
import JobItem from "../JobItem/JobItem";
import styles from "../Experience/experience.module.css";

function Experience() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <FormattedMessage id="experienceTitle" />
      </h3>
      <span className={styles.subtitle}>
        {" "}
        <FormattedMessage id="experienceSubtitle" />
      </span>
      <JobItem />
    </div>
  );
}

export default Experience;
