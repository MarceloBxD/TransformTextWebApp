import styled from "styled-components";

export const OptionsAreaContainer = styled.div`
  width: 33.33%;
  height: 50px;
  z-index: 100;
  position: relative;
  top: 30px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  border-radius: 5px;
  display: flex;
`;

export const OptionsAreaButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7d53de;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

export const TextBold = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #333;
  font-family: "Roboto", sans-serif;
`;
