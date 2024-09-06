import styled from "styled-components"

export const SobreStyle = styled.section `
    width: 100%;
    background-color: #ADB8BB;

.titulo{
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(16px,2vw,40px);
}


.Sobre{ 
    margin-top: clamp(120px,22vh,260px);
    text-align: center;
    padding: 2vw 18vw ;
    margin-bottom: clamp(20px,4vh,100px);
    font-size: clamp(14px,3.2vw,40px);
}
.texto-sobre{
    padding-top: 8vh;
}
h1{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    font-size: clamp(36px,4vw,60px);
    font-weight: 700;
}
h2{
    font-size: clamp(10px,1.8vw,40px);
    font-weight: 500;
}
p{
    font-size: 2vh;
    line-height: 3vw;
    font-size: clamp(8px,1vw,40px);
}

i{
    padding-right: 1.2vw;
}


`