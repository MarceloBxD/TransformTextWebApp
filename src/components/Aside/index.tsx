import { AsideContainer, AsideIconsArea } from "./styles";
import close from "../../assets/images/svgs/close.svg";
import home from "../../assets/images/svgs/home.svg";
import help from "../../assets/images/svgs/help.svg";

import { useApp } from "../../contexts/ContextApi";

import { useState } from "react";

export default () => {
  const { modalIsOpen, setModalIsOpen }: any = useApp();
  return (
    <AsideContainer>
      <AsideIconsArea>
        <img
          style={{ cursor: "pointer" }}
          width={"30px"}
          onClick={() => setModalIsOpen(modalIsOpen)}
          src={close}
        />
        <img style={{ cursor: "pointer" }} width={"30px"} src={home} />
        <img style={{ cursor: "pointer" }} width={"30px"} src={help} />
      </AsideIconsArea>
    </AsideContainer>
  );
};
