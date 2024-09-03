import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Comfortaa", sans-serif;
}

body,
#root{
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;


}

section{
    padding-top: 14vh;
}
`


export default GlobalStyle