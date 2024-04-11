import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "../MainInfo/mainInfo.module.css";

function MainInfo() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <FormattedMessage id="name" />
        </h1>
        <h2 className={styles.subtitle}>Front-end Developer</h2>
        <p className={styles.subinfo}><FormattedMessage id="aboutAdditional"/></p>
      </div>
    </>
  );
}

export default MainInfo;
