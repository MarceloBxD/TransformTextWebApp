import { AsideContainer, AsideIconsArea } from "./styles";
import { IconHome, IconHelp, IconClose } from "../../assets/images/svgs";

import { useApp } from "../../contexts/ContextApi";

export default () => {
  const { setModalIsOpen }: any = useApp();
  return (
    <AsideContainer>
      <AsideIconsArea>
        <img
          style={{ cursor: "pointer" }}
          width={"30px"}
          onClick={() => setModalIsOpen(true)}
          src={IconClose}
        />
        <img style={{ cursor: "pointer" }} width={"30px"} src={IconHome} />
        <img style={{ cursor: "pointer" }} width={"30px"} src={IconHelp} />
      </AsideIconsArea>
    </AsideContainer>
  );
};
