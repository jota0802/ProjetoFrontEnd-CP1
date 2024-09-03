import {ErrorStyle} from '../css/ErrorStyle'

const Error =()=>{
    return(
        <ErrorStyle>
            <section className='Error'>
                <h1 className='texto-Error'>Error 404</h1>
                <p className='texto-Error'>Pagina não encontrada</p>
            </section>
        </ErrorStyle>
    )
}

export default Error