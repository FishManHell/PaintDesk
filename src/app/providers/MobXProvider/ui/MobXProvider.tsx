import { createContext, FC, ReactNode, useContext } from "react";
import { RootStore } from "../config/rootStore";

const rootStore = new RootStore();
const StoreContext = createContext(rootStore);

export const MobXProvider: FC<{ children: ReactNode; store?: RootStore }> = ({
  children,
  store,
}) => (
  <StoreContext.Provider value={store ?? rootStore}>
    {children}
  </StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
