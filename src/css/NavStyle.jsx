import styled from "styled-components"

export const NavStyle = styled.section `


.nav{
    z-index: 2;
    width: 100%;
    height: 14vh;
    position: fixed;
    background-color: #232A2F;
    list-style: none;
    display: inline-flex; /*coloca tudio em uma linha unica */
    align-items: center;
    
}

.navlink{
    text-decoration:none;
    justify-content:space-between;
    padding: 30px;
    margin-left: 240px;
    font-size: 20px;
    color:#ffff;
    transition: 0.3s ease-in-out;

    
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