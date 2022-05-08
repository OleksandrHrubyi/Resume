import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "../Education/education.module.css";
import EducationItem from "../EducationItem/EducationItem";

function Education() {
  return (
    <div className={styles.container}>
      <h3 className={styles.mainTitle}>
        <FormattedMessage id="educationTitle" />
      </h3>
      <EducationItem />
      {/* <section className={styles.mainInfo}>
          <h2 className={styles.title}>
            <FormattedMessage id="aboutTitle" />
          </h2>
          <span className={styles.text}>
            <FormattedMessage id="aboutAdditional" />
          </span>
        </section> */}
    </div>
  );
}

export default Education;
