import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    
}

body {
    background-color: #151515;
    font-size: 25px; 
    color: white;
    font-family: 'Montserrat', sans-serif;

    /* font-family: 'Roboto', sans-serif; */
    /* font-family: 'Ubuntu', sans-serif; */
}
`;

export default GlobalStyle;
