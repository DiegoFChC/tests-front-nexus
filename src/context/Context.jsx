import { createContext, useState } from "react";
export const Context = createContext({});

export default function ContextProvider({ children }) {
  let data = {
    loggedIn: false,
    typeUser: "",
    name: "nn",
    token: "",
  };
  const [appState, setAppState] = useState(data);
  return (
    <Context.Provider value={{ appState, setAppState }}>
      {children}
    </Context.Provider>
  );
};
