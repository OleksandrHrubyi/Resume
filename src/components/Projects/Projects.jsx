import { FormattedMessage } from "react-intl";
import { MyProjects } from "../../data";

import styles from "../Projects/projects.module.css";

function Projects() {
  return (
    <div className={styles.container}>
      <h3 className={styles.mainTitle}>
        <FormattedMessage id="projectTitle" />
      </h3>
      <ul className={styles.list}>
        {Object.keys(MyProjects).map((project) => {
          return (
            <li key={project} className={styles.item}>
              <a className={styles.link} href={MyProjects[project]}>
                <span className={styles.projectTitle}>{project}</span>
              </a>
              <h4 className={styles.subtitle}>
                <FormattedMessage id={`${project}.defin`} />
              </h4>
              <p>
                <FormattedMessage id={`${project}.descr`} />
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
