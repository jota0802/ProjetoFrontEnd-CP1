import styled from "styled-components"

export const NavStyle = styled.section `

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Comfortaa", sans-serif;
}
.nav{
    z-index: 2;
    width: 100%;
    height: 125px;
    position: fixed;
    background-color: #62717e;
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
    
}
.Marca{
    margin-left: 70px;
    font-size: 40px;
}

`