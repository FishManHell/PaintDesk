import { createContext, FC, ReactNode, useContext } from "react";
import { RootStore } from "../config/rootStore";

const rootStore = new RootStore();
const StoreContext = createContext(rootStore);

export const MobXProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
