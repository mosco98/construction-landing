import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const value = { isContactModalOpen, setIsContactModalOpen };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
