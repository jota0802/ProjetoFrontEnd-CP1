
import { NavStyle } from "../css/NavStyle";
import { Link } from "react-router-dom";

const Nav =()=>{

    return(
        <NavStyle>
            <nav className="cover"></nav>
            <section className="nav">
                <h1 className="Marca">SportMax</h1>
                <Link to ='/' className="navlink">Home</Link>
                <Link to ='/Produtos' className="navlink">Produtos</Link>
                <Link to ='/Contato' className="navlink">Contato</Link>
                <Link to ='/Sobre' className="navlink">Sobre</Link>
            </section>
        </NavStyle>
    )
}
export default Nav