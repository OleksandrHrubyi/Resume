import styles from "../Projects/projects.module.css";
const barb = "https://oleksandrhrubyi.github.io/project_barbershop/";
const marketplace = "https://titoffroma.github.io/OLX-group-project/";

function Projects() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Проекти</h3>
      <ul>
        <li className={styles.item}>
          <a className={styles.link} href={barb}>
            BarberShop
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href={marketplace}>
            Marketplace{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
