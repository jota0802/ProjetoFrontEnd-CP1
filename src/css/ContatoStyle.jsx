import styled from "styled-components"

export const ContatoStyle = styled.section `
        width: 100%;
        height: 98vh;
        background-color: #ADB8BB;

.Contato_titulo{
        display:flex;
        justify-content: center;
        margin-top: 24vh;
        font-size: 26px;
}

.Contato_box{
        z-index: 2;
        display: flex;
        flex-direction:column;
        width: 60vh;
        height: 35vh;
        margin-top: 10vh;
        margin-left: 75vh; 
        padding-top:4vh;
        align-items: center;
        background-color: #153147;
        color: #ffffff;
        list-style: none;
        border-radius: 20px;
}

.Formulario{
        justify-content:space-evenly;
        font-size: 3vh;
        display: flex;
        flex-direction:column;
}

.Button{
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px;
        border-radius: 5px ;
        font-size: 20px;
        background-color:#285879 ;
        border-style: none;
        color: white;
}

input{
        height: 4vh;
        width: 30vh;
        font-size: 20px;
        background-color: #97a5a8;
        display: flex;
        flex-direction: space-around;
}
`