import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: 'Lato', sans-serif;
    font-size: 1.1em;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.darkGreen}
  }
`;

export default GlobalStyles;
