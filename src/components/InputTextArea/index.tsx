import { Container, InputTextAreaContainer } from "./styles";
import { useApp } from "../../contexts/ContextApi";
import ToastTextCopied from "../ToastTextCopied";
import { IconCopy } from "../../assets/images/svgs";

export default () => {
  const {
    inputValue,
    setInputValue,
    textCopied,
    setTextCopied,
    textBold,
    textUnderlined,
  }: any = useApp();
  const copyInputValue = () => {
    if (!inputValue) {
      setTextCopied(false);
    } else {
      setTextCopied(true);
      navigator.clipboard.writeText(inputValue);
    }
  };

  return (
    <Container>
      {textCopied && <ToastTextCopied />}
      <InputTextAreaContainer
        value={inputValue}
        className={
          textBold
            ? "font-bold"
            : "font-normal" && textUnderlined
            ? "underline"
            : "no-underline"
        }
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Insira seu texto..."
      ></InputTextAreaContainer>
      <img
        className="w-8 p-2 -mt-28 hover:scale-110 rounded-md cursor-pointer"
        onClick={() => copyInputValue()}
        src={IconCopy}
      />
    </Container>
  );
};
