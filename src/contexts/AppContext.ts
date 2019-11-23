import { createContext } from "react";

export const AppContext = createContext({
  nameColor: "",
  setNameColor: (c: string) => {}
});
