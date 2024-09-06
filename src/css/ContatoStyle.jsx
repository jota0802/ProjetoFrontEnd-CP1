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
        font-size: 30px;
}
h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 6vh;
}
i{
        font-size: 30px;
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
        color: #ffffff;
        border-radius: 20px;
        box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.3);
}

.Formulario{
        display: flex;
        flex-direction:column;
        justify-content:space-evenly;
        font-size: 3vh;
}
label{
        padding: 20px;
}

.Button{
        margin-top: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;
        border-radius: 5px ;
        font-size: 20px;
        background-color:#285879 ;
        border-style: none;
        color: white;
}

input{
        height: 4vh;
        width: 30vh;
        font-size: 16px;
        background-color: #97a5a8;
        display: flex;
        flex-direction: space-around;
        padding: 20px 50px 20px;
        margin-top: 20px;
        border-radius: 10px;
        border: 0px;
}
i{
        padding: 40px 20px;
}
`