import { HomeStyle } from "../css/HomeStyle";
import Produtos from "./Produtos";

const Home =()=> {
    return (
        <HomeStyle>
                <h1>
                    <i class="fi fi-br-home"></i>
                    Home
                </h1>
                <Produtos/>
        </HomeStyle>
    )

}
export default Home