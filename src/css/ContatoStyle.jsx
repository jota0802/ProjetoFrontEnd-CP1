import styled from "styled-components"

export const ContatoStyle = styled.section `
        width: 100%;
        height: 100vh;
        background-color: #ADB8BB;

section{
        display: flex;
        justify-content:center;
}
.Contato_titulo{
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top: 18vh;
        font-size: 3.2vh;
}
h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 6vh;
}
p{
        margin: 1.2vh 3vh;
}
i{
        font-size: 3.2vh;
        padding: 4.4vh 2vh;
}
.Contato_box{
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        width: 60vh;
        height: 60vh;
        margin-top: 2vh;
        background-color: #153147;
        color: white;
        border-radius: 2vh;
        box-shadow: 1vh 1vh 2vh rgba(0, 0, 0, 0.3);
}

.Formulario{
        display: flex;
        flex-direction:column;
        justify-content:space-evenly;
        font-size: 3vh;
}
label{
        padding: 2vh;
}

.Button{
        margin-top: 2.8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1vh;
        border-radius: 0.6vh ;
        font-size: 2vh;
        background-color:#285879 ;
        border-style: none;
        color: white;
        transition: 0.3s ease-in-out;
}
.Button:hover{
        scale: 1.1;
        background-color: white ;
        color: black;
}

input{
        height: 4vh;
        width: 40vh;
        font-size: 1.8vh;
        background-color: #97a5a8;
        display: flex;
        flex-direction: space-around;
        padding: 2vh 12vh 2vh;
        margin-top: 2vh;
        border-radius: 1vh;
        border: 0vh;
        transition: 0.4s ease-in-out;
}
input:focus{
        scale: 1.03
}
`