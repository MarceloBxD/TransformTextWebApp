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
        UPPERCASE
      </OptionsAreaButton>
      <OptionsAreaButton onClick={() => transformToLowercase()}>
        lowercase
      </OptionsAreaButton>
      <OptionsAreaButton onClick={() => transformToBold()}>
        <TextBold>Bold</TextBold>
      </OptionsAreaButton>
      <OptionsAreaButton onClick={() => transformToUnderline()}>
        <u>Underline</u>
      </OptionsAreaButton>
    </OptionsAreaContainer>
  );
};
