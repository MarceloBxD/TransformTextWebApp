import { Container, Image, InputTextAreaContainer } from "./styles";

import { useApp } from "../../contexts/ContextApi";

import copy from "../../assets/images/svgs/copy.svg";

export default () => {
  const { inputValue, setInputValue }: any = useApp();

  const copyInputValue = () => {
    navigator.clipboard.writeText(inputValue);
  };

  return (
    <Container>
      <InputTextAreaContainer
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Insira seu texto..."
      ></InputTextAreaContainer>
      <Image onClick={() => copyInputValue()} src={copy} />
    </Container>
  );
};
