import { FormattedMessage } from "react-intl";
import styles from "./textinfo.module.css";

function TextInfo() {
  return (
    <div className={styles.textContainer}>
      <h3 className={styles.title}>
        <FormattedMessage id="experienceSubtitle" />
      </h3>
    </div>
  );
}

export default TextInfo;
