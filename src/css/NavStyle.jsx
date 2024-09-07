import styled from "styled-components"

export const NavStyle = styled.section `

//cover esta sendo usado para fazer um efeito ilusorio do sumiço do scroll
.cover{
    display: flex;
    position: fixed;
    width:100vw;
    height: calc(1vw + 10px);
    background-color:#ADB8BB ;
}

.nav{
    width: 92vw;
    height: calc(5vw + 40px);
    z-index: 2;
    display: flex;
    text-align: center;
    position: fixed;
    margin-top: 2vh;
    margin-left: 2.6vw; 
    align-items: center;
    background-color: #153147;
    list-style: none;
    border-radius: 2vh;
    box-shadow: 1vh 1vh 2vh rgba(0, 0, 0, 0.3);
}

.navlink{
    display:flex;
    justify-content: center;
    margin-left: 0vw;
    padding-top: calc(2vh + 10px);
    padding-bottom: calc(2vh + 10px);
    margin-left: clamp(10px,8vw,18vw);
    text-decoration:none;
    font-size: clamp(8px , 1.4vw, 26px);
    color:#ffff;
    transition: 0.4s ease-in-out;
}

.navlink:hover{
    scale: 1.1;
}

.Marca{
    margin-left: 4vw;
    font-size: clamp(0px,2.6vw, 3vw);
    color:#ffff;
}

`