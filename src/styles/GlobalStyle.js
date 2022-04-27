import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background: linear-gradient(180deg, #eeeeee 0%, #ffffff 100%);
    background-repeat: no-repeat;
    margin: 0;
}

body,
input,
button {
    font-family: "Montserrat", sans-serif;
}
`;

export default GlobalStyle;
