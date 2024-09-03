import { Link } from "react-router-dom";
import { NavStyle } from "../css/NavStyle";

const Nav =()=>{

    return(
        <NavStyle>
            <section className="nav">
                <link to ='/' className="navlink">Home</link>
                <link to ='/Produtos' className="navlink">Produtos</link>
                <link to ='/Contato' className="navlink">Contato</link>
                <link to ='/Sobre' className="navlink">Sobre</link>
            </section>
        </NavStyle>
    )
}
export default Nav