import styled from "styled-components"

export const ContatoStyle = styled.section `
        width: 100%;
        background-color: #ADB8BB;
        min-height: 100vh;
section{
        display: flex;
        justify-content:center;

}
.Contato_titulo{
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top: clamp(100px,11.2vw,400px);
        font-size: clamp(16px,2vw,40px);
        
}
.Contato_box{
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        padding: 1vw 8vw ;
        margin-top: 2vh;
        background-color: #153147;
        color: white;
        border-radius: 2vw;
        box-shadow: 1vw 1vw 2vw rgba(0, 0, 0, 0.3);
        margin-bottom: 10vh;
}

.Formulario{
        display: flex;
        flex-direction:column;
        justify-content:space-evenly;
        font-size: 2vw;
}

.Button{
        margin-top: 2vw;
        margin-bottom: clamp(20px,1vw,30px);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: clamp(4px,0.6vw,10px);
        border-radius: 0.6vw ;
        font-size: clamp(8px,2vw,20px);
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
label{
        padding: 1.4vw 0vw;
        display: flex;
        justify-content: center;
        flex-direction: column; /* Alinha os produtos verticalmente */
}
input{
        display: flex;
        height: clamp(26px,2vw,40px);
        width: clamp(40px,20vw,400px);
        font-size: clamp(6px,1vw,20px);
        background-color: #97a5a8;
        flex-direction: space-around;
        padding: 1vw 4vw;
        border-radius: 0.6vw;
        border: 0vh;
        transition: 0.4s ease-in-out;
}
input:focus{
        scale: 1.03
}
h1 {
        display: flex;
        align-items: center;
        justify-content: center;
}
p{
        margin-top: 1.2vw;
        margin-bottom: 1.2vw;
        font-size: clamp(6px, 1.6vw, 50px);

}
i{
        font-size: clamp(10px,1.6vw,30px);
        padding: 4.4vh 2vh;
}
`