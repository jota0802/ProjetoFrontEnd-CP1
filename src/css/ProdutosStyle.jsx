import styled from "styled-components"
export const ProdutosStyle = styled.section `
    
    width: 100%;
    height: 106vh;
    background-color: #ADB8BB;

h1{
        display:flex;
        margin-top: 22vh;
        justify-content: center;
        font-size: 30px;
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
    box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.3);

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
    font-weight: 700;
}
.preco{
    font-size: 18px;
    font-weight: 400;
}
.btn{
    display: flex;
    justify-content: center;
    padding: 30px;
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