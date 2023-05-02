import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [textCopied, setTextCopied] = useState(false);

  const value = {
    inputValue,
    setInputValue,
    modalIsOpen,
    setModalIsOpen,
    textCopied,
    setTextCopied,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp() {
  return useContext(AppContext);
}
