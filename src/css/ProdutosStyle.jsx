import styled from "styled-components"
export const ProdutosStyle = styled.section `
    
    width: 100%;
    height: 110vh;
    background-color: #ADB8BB;

h1{
        display:flex;
        margin-top: 26vh;
        justify-content: center;
        font-size: 26px;
}
h1 i{
        padding-right: 8px;
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
    margin: 30px;
    background-color: #232A2F;
    border-radius: 20px;

}

.imagem{
    display: flex;
    justify-content: center;
    width: 270px;
    height: 270px;
    margin: 50px 50px 30px 50px ;

}
p{  
    margin: 30px 20px 40px 20px;
    color: white;
    overflow: visible;
    text-align: center;
    font-size: 14px;
}
.btn{
    display: flex;
    justify-content: center;
    padding: 40px;
    text-decoration:none;
    background-color: #eee6d2;
    border-bottom-left-radius: 20px; 
    border-bottom-right-radius: 20px;
    transition: 0.3s ease-in-out;
    color: black;
}

.btn:hover{
    background-color: #f9f8f7;
}

`