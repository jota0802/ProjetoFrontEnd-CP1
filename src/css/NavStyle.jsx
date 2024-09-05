import styled from "styled-components"

export const NavStyle = styled.section `

//cover esta sendo usado para fazer um efeito ilusorio do sumiço do scroll
.cover{
    display: flex;
    position: fixed;
    width:100%;
    height: 20px;
    background-color:#ADB8BB ;
}

.nav{
    z-index: 2;
    display: flex;
    position: fixed;
    width: 190vh;
    height: 14vh;
    margin-top: 20px;
    margin-left: 8vh; 
    align-items: center;
    background-color: #153147;
    list-style: none;
    border-radius: 20px;
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.3);
}

.navlink{
    display:flex;
    justify-content: center;
    margin-left: 200px;
    padding: 20px;
    text-decoration:none;
    font-size: 22px;
    color:#ffff;
    transition: 0.4s ease-in-out;
}

.navlink:hover{
    scale: 1.1;
}

.Marca{
    margin-left: 90px;
    font-size: 40px;
    color:#ffff;
}

`