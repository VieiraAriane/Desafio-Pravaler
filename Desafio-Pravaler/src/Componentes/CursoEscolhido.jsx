/* eslint-disable react/prop-types */

const CursoEscolhido = ({ curso, cursoSelecionado, onChange}) => {
    return (
        <div>
            <h1>Curso</h1>
            <select value={cursoSelecionado} onChange={onChange}>
                <option value=""> Selecione o Curso</option>
                {curso.map((cur) => {
                    return(
                    <option key={cur.id} value={cur.name}>
                        {cur.name}
                    </option>
                    )
                })}
            </select>
        </div>
    );
};

export default CursoEscolhido;