import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [textCopied, setTextCopied] = useState(false);
  const [textBold, setTextBold] = useState(false);
  const [textUnderlined, setTextUnderlined] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const value = {
    inputValue,
    setInputValue,
    modalIsOpen,
    setModalIsOpen,
    textCopied,
    setTextCopied,
    textBold,
    setTextBold,
    textUnderlined,
    setTextUnderlined,
    showDropDown,
    setShowDropDown,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp() {
  return useContext(AppContext);
}
