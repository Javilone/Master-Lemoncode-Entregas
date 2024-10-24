import React, { createContext, useContext, useState, ReactNode } from "react";

interface InputContextType {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>("lemoncode");

  return <InputContext.Provider value={{ inputValue, setInputValue }}>{children}</InputContext.Provider>;
};

export const useInputContext = (): InputContextType => {
  const context = useContext(InputContext);

  return context;
};
