import {ContatoStyle} from '../css/ContatoStyle'
const Enviar=()=>{
    let Nome = document.getElementById("idNome").value;
    let Email = document.getElementById("idEmail").value;
    let Telefone = document.getElementById("idTelefone").value;

    alert("Contato enviado!");
}


const Contato =()=>{
    return(
        <ContatoStyle>
            <section>
            <h1 className='Contato_titulo'>
                Nos contate aqui!
            </h1>
                <div className='Contato_box'>
                    <form className='Formulario'>
                    <label>
                        Nome:
                        <input type="text" placeholder="Digite seu nome" id="idNome" />
                    </label>
                    <label>
                        E-mail:
                        <input type="text" placeholder="Digite seu e-mail" id="idEmail" />
                    </label>
                    <label>
                        Telefone:
                        <input type="text" placeholder="Digite seu telefone" id="idTelefone" />
                    </label>
                    </form>
                    <button onclick={Enviar()} className='Button' type="submit" value="Enviar">Enviar</button>
                </div>
            </section>
        </ContatoStyle>
    )
}
export default Contato