import { HomeStyle } from "../css/HomeStyle";
import Produtos from "./Produtos";

const Home =()=> {
    return (
        <HomeStyle>
                <h1>
                    <i class="fi fi-br-home"></i>
                    Home
                </h1>
                    <h2 className="bem-vindo">Bem-vindo ao Meu Site</h2>
                    <p className="texto">Oferecemos soluções personalizadas para você.</p>
                <Produtos/>
        </HomeStyle>
    )

}
export default Home