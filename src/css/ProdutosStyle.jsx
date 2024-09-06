import styled from "styled-components"
export const ProdutosStyle = styled.section `
    
    width: 100%;
    height: 106vh;
    background-color: #ADB8BB;

h1{
        display:flex;
        margin-top: 22vh;
        justify-content: center;
        font-size: 3.2vh;
}
h1 i{
        padding-right: 1vh;
}

section {
    display: flex;
    justify-content: center;
    margin: 8vh;
    
    
}
.produtos{
    display: flex;
    justify-content: space-between;
    padding-right:2vh;
    
}
.produto{
    margin: 3.2vh;
    background-color: #232A2F;
    border-radius: 2vh;
    box-shadow: 1vh 1vh 2.6vh rgba(0, 0, 0, 0.3);

}

.imagem{
    display: flex;
    justify-content: center;
    width: 28vh;
    height: 28vh;
    margin: 5.2vh 5.2vh 3.2vh 5.2vh ;

}
p{  
    margin: 3.2vh 2vh 4.2vh 2vh;
    color: white;
    overflow: visible;
    text-align: center;
    font-size: 1.6vh;
    font-weight: 700;
}
h2{
    text-align: center;
    font-size: 1.8vh;
    transition: 0.4s ease-in-out;
    font-weight: 900;
    
}
.preco{
    font-size: 2vh;
    font-weight: 400;
}
.btn{
    display: flex;
    justify-content: center;
    padding: 3.2vh;
    text-decoration:none;
    background-color: #285879 ;
    border-bottom-left-radius: 2vh; 
    border-bottom-right-radius: 2vh;
    transition: 0.4s ease-in-out;
    color: black;
}
.btn:hover{
    background-color: #f9f8f7;
}
.btn:hover h2{
    scale: 1.03;
    font-weight: 900;
}
a{
    text-decoration: none;
}
`