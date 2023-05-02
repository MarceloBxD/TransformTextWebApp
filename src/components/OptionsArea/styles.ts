import styled from "styled-components";

export const OptionsAreaContainer = styled.div`
  width: 33.33%;
  position: relative;
  top: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 40px;
  gap: 10px;
  border-radius: 5px;
`;

export const OptionsAreaButton = styled.button`
  width: 120px;
  max-width: 100%;
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
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
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
