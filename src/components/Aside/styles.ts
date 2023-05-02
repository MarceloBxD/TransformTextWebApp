import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 90px;
  height: 100vh;
  background-color: #7d53de;
  border-right: 1px solid #ddd;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px 20px;
  z-index: 100;
`;

export const AsideIconsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
