import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "../../i118n/layout/en.json";
import myImg from "../../image/myphoto.jpeg";
import styles from "./main.module.css";
import gitIcon from "../../image/github.svg";
import linkedinIcon from "../../image/linkedin.svg";
import mailIcon from "../../image/mail.svg";

import { ReactSVG } from "react-svg";

function Main() {
  const softSkills = Object.keys(messages.softSkillsList);
  const hardSkills = Object.keys(messages.hardSkillsList);

  return (
    <>
      <div className={styles.containerImg}>
        <img className={styles.portfolio} src={myImg} alt="portfolio" />
      </div>
      <div className={styles.mainContainer}>
        <section className={styles.box}>
          <h3 className={styles.title}>
            <FormattedMessage id="softSkillsTitle" />
          </h3>
          <ol className={styles.list}>
            {softSkills.map((skill) => {
              return (
                <li key={skill} className={styles.item}>
                  <span className={styles.skills}>
                    <FormattedMessage id={`softSkillsList.${skill}`} />
                  </span>
                </li>
              );
            })}
          </ol>
        </section>
        <section className={styles.box}>
          <h3 className={styles.title}>
            {" "}
            <FormattedMessage id="hardSkillsTitle" />
          </h3>
          <ol className={styles.list}>
            {hardSkills.map((skill) => {
              return (
                <li key={skill} className={styles.item}>
                  <span className={styles.skills}>
                    <FormattedMessage id={`hardSkillsList.${skill}`} />
                  </span>
                </li>
              );
            })}
          </ol>
        </section>

        <section className={styles.contactBox}>
          <h3 className={styles.title}>
            <FormattedMessage id="contactsTitle" />
          </h3>
          <a className={styles.contact} href="tel:+380675034024">
            <span className="material-icons">local_phone</span>
            <span className={styles.contactText}> +38067-503-40-24</span>
          </a>

          <ul className={styles.contactLinkList}>
            <li className={styles.contactsLink}>
              <a href="https://www.linkedin.com/in/aleksandr-grubyi-163578200/">
                <ReactSVG
                  src={linkedinIcon}
                  beforeInjection={(svg) => {
                    svg.classList.add(styles.linkedinIcon);
                    svg.setAttribute("style", "width: 50px");
                  }}
                />
              </a>
            </li>
            <li className={styles.contactsLink}>
              <a href="https://github.com/OleksandrHrubyi">
                <ReactSVG
                  src={gitIcon}
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", "width: 50px");
                  }}
                />
              </a>
            </li>
            <li className={styles.contactsLink}>
              <a href="mailto:ghrubyi@ukr.net">
                <ReactSVG
                  src={mailIcon}
                  beforeInjection={(svg) => {
                    svg.classList.add(styles.linkedinIcon);
                    svg.setAttribute("style", "width: 50px");
                  }}
                />
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.mainInfo}>
          <h2 className={styles.title}>
            <FormattedMessage id="aboutTitle" />
          </h2>
          <span className={styles.text}>
            <FormattedMessage id="aboutAdditional" />
          </span>
        </section>
      </div>
    </>
  );
}

export default Main;
