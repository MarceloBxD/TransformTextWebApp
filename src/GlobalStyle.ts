import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    body {
        background-color: #f5f5f5;
        width: 100%;
        color: #333;
        font-family: 'Roboto', sans-serif;
    }
`;
