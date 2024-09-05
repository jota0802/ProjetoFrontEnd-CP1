import { ProdutosStyle } from "../css/ProdutosStyle";
import imagem1 from '../assets/imagens/produtos/bola.png'
import imagem3 from '../assets/imagens/produtos/bolsa.png'
import imagem4 from '../assets/imagens/produtos/raquete.png'
import imagem2 from '../assets/imagens/produtos/raqueteMesa.png'


const Produtos =()=> {
    return (
        <ProdutosStyle>
                <h1>
                    <i class="fi fi-br-shopping-bag"></i>
                    Produtos
                </h1>
            <section className="produtos">
                <nav className="produto image1">
                    <img src={imagem1} className="imagem" />
                    <p>Bolsa Nike Brasilia Xs Duff 9.5</p>


                </nav>
                <nav className="produto image2">
                    <img src={imagem3} className="imagem"/>
                    <p>Raquete Adulto de Tennis TR990 Power Artengo</p>

                </nav>
                <nav className="produto image3">
                    <img src={imagem2} className="imagem" />
                    <p>Bola de Tênis Head Pro X 3</p>

                </nav>
                <nav className="produto image4">
                    <img src={imagem4} className="imagem" />
                    <p>Raquete de Tennis PPR130 Outdoor Pongori</p>

                </nav>
            </section>

        </ProdutosStyle>
    )

}
export default Produtos