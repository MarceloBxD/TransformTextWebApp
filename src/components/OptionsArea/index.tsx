import { OptionsAreaContainer, OptionsAreaButton, TextBold } from "./styles";
import { useApp } from "../../contexts/ContextApi";

export default () => {
  const {
    inputValue,
    setInputValue,
    setTextBold,
    textBold,
    setTextUnderlined,
    textUnderlined,
  }: any = useApp();

  const transformToUppercase = () => {
    setInputValue(inputValue.toUpperCase());
    setTextBold(false);
    setTextUnderlined(false);
  };

  const transformToLowercase = () => {
    setInputValue(inputValue.toLowerCase());
    setTextBold(false);
    setTextUnderlined(false);
  };

  const transformToBold = () => {
    setTextBold(!textBold);
    setTextUnderlined(false);
  };

  const transformToUnderline = () => {
    setTextUnderlined(!textUnderlined);
    setTextBold(false);
  };

  return (
    <OptionsAreaContainer className="flex relative  flex-col sm:flex-row">
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
