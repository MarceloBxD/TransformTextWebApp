import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 35px;
  background-color: red;
  display: flex;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #ccc;
  padding: 10px;
  margin-top: -110px;
  cursor: pointer;
  justify-content: flex-end;
  transition: all 0.2s linear;

  :hover {
    transform: scale(1.05);
  }
`;

export const InputTextAreaContainer = styled.textarea`
  width: 33.33%;
  display: flex;
  margin: 50px auto;
  justify-content: center;
  top: 30px;
  height: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  outline: none;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: #333;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  &:focus {
    border: 1px solid #333;
  }
`;
