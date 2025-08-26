import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const value = {
    activeSection,
    setActiveSection,
    isTransitioning,
    setIsTransitioning,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
