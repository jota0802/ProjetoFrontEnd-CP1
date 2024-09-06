import styled from "styled-components"

export const HomeStyle = styled.section `
    
    width: 100%;
    height: calc(72vh + 200px);
    background-color: #ADB8BB;

    h1{
        display:flex;
        justify-content: center;
        margin-top: 26vh;
        font-size: clamp(30px,2vw,35px);
    }
    h1 i{
        padding-right: 1vh;
    }
    .bem-vindo{
        display: flex;
        justify-content: center;
        font-size: clamp(36px,3vw,54px);
        margin-top: calc(4vh + 100px);
        font-weight: 700;
    }
    .texto{
        display: flex;
        justify-content: center;
        color: black; 
        padding: 2vw;
        font-weight: 400;
        font-size: clamp(24px,1.8vw,40px);
    }
`