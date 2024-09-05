import styled from "styled-components"

export const NavStyle = styled.section `


.nav{
    z-index: 2;
    width: 1800px;
    height: 14vh;
    display: flex;
    position: fixed;
    background-color: #153147;
    list-style: none;
    align-items: center;
    flex-grow: 1;
    margin-top: 20px;
    margin-left: 46px; 
    border-radius: 20px;
}

.navlink{
    display:flex;
    justify-content: center;
    margin-left: 230px;
    padding: 20px;
    text-decoration:none;
    font-size: 20px;
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