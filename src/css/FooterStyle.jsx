import styled from "styled-components"

export const FooterStyle = styled.section `
    width: 100%;
.Footer{
    display: flex;
    text-align: center;
    justify-content: center;
    padding-top: calc(4vh + 10px );
    padding-bottom: calc(4vh + 10px );
    padding-right: calc(2vw + 10px);
    padding-left: calc(2vw + 10px);
    background-color:#232A2F;
    color: white; 
    font-size: clamp(10px,2vh,30px);   
}

i{
    padding-left: calc(4vw + 20px);
    font-size: clamp(20px,1.2vw,30px);
    color: white;
}
a{
    text-decoration: none;
    font-size: clamp(8px,1vw,30px);
}
h5{
    font-size: clamp(10px,2vh,30px);
}
`