import styled from "styled-components"

export const NavStyle = styled.section `


.nav{
    z-index: 2;
    width: 100%;
    height: 14vh;
    position: fixed;
    background-color: #153147;
    list-style: none;
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 20px;
}

.navlink{
    text-decoration:none;
    margin-left: 280px;
    font-size: 20px;
    color:#ffff;
    transition: 0.3s ease-in-out;
    justify-content:center;
}

.navlink:hover{
    scale: 1.1;
}

.Marca{
    margin-left: 70px;
    font-size: 40px;
    color:#ffff;
}

`