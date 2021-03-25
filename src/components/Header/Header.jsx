import React from "react";

import { AppContext } from "../Context";
import { useContext } from "react";
import LOCALES from "../../i118n/constants";
import styles from "./header.module.css";

function Header() {
  const { state, dispatch } = useContext(AppContext);

  const setLenguage = (locale) => {
    localStorage.setItem("locale", JSON.stringify(locale));
    const language = JSON.parse(localStorage.getItem("locale"));
    dispatch({
      type: "setLocale",
      locale: language,
    });
  };
  return (
    <div className={styles.header}>
      <button
        disabled={state.locale === LOCALES.UKRAINE}
        onClick={() => {
          setLenguage(LOCALES.UKRAINE);
        }}
        className={styles.btn}
      >
        UA
      </button>
      <button
        disabled={state.locale === LOCALES.ENGLISH}
        onClick={() => {
          setLenguage(LOCALES.ENGLISH);
        }}
        className={styles.btn}
      >
        EN
      </button>
    </div>
  );
}

export default Header;
