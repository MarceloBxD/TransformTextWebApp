import { OptionsAreaContainer, OptionsAreaButton, TextBold } from "./styles";

import { useApp } from "../../contexts/ContextApi";

export default () => {
  const { inputValue, setInputValue }: any = useApp();

  const transformToUppercase = () => {
    setInputValue(inputValue.toUpperCase());
  };

  const transformToLowercase = () => {
    setInputValue(inputValue.toLowerCase());
  };

  const transformToBold = () => {
    // transformar o texto para negrito
    console.log("transformToBold");
  };

  const transformToUnderline = () => {
    // transformar o texto para sublinhado
    console.log("transformToUnderline");
  };

  return (
    <OptionsAreaContainer>
      <OptionsAreaButton onClick={() => transformToUppercase()}>
        Uppercase
      </OptionsAreaButton>
      <OptionsAreaButton onClick={() => transformToLowercase()}>
        Lowercase
      </OptionsAreaButton>
      <OptionsAreaButton onClick={() => transformToBold()}>
        Bold
      </OptionsAreaButton>
      <OptionsAreaButton onClick={() => transformToUnderline()}>
        Underline
      </OptionsAreaButton>
    </OptionsAreaContainer>
  );
};
