import { Link } from "react-router-dom";

const PaginaInicial = ()=>{
    return (
        <div>
            <h1>Pravaler</h1>
            <Link to="/comparador">Quero comparar</Link>
        </div>
    )
}

export default PaginaInicial;