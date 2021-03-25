import { createContext, useReducer } from "react";

import defaultLocale from "./defaultContext";

const AppContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "setLocale":
      return { ...state, locale: action.locale };
    default:
      return defaultLocale;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultLocale);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
