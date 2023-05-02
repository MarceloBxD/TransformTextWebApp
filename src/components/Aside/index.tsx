import { AsideContainer, AsideIconsArea } from "./styles";
import { IconHome, IconHelp, IconClose } from "../../assets/images/svgs";

import { useApp } from "../../contexts/ContextApi";

export default () => {
  const { setModalIsOpen }: any = useApp();
  return (
    <AsideContainer>
      <AsideIconsArea>
        <img
          className="hover:rotate-90 transition-all ease-in-out duration-300  hover:scale-110"
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
