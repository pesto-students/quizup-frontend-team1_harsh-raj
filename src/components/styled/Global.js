import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: 'Lato', sans-serif;
    font-size: 1.15em;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.darkGreen}
  }
`;

export default GlobalStyles;
