import { HomeStyle } from "../css/HomeStyle";
import Produtos from "./Produtos";
import Contato from "./Contato";
import Sobre from './Sobre'
const Home =()=> {
    return (
        <HomeStyle>
                <h1>
                    <i class="fi fi-br-home"></i>
                    Home
                </h1>
                    <h2 className="bem-vindo">Bem-vindo à SportMax</h2>
                    <p className="texto">Oferecemos soluções personalizadas para você.</p>
                <Sobre/>
        </HomeStyle>
    )

}
export default Home