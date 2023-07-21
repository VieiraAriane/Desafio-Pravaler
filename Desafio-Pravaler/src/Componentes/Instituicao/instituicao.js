/* eslint-disable react/prop-types */
import "./instituicao.css";

const InstituicaoEscolhida = ({ instituicao, instituicaoSelecionada, onChange}) => {
    return (
        <div>
            <h1 className="titulo">Instituição</h1>
            <select value={instituicaoSelecionada} onChange={onChange}>
                <option value=""> Selecione uma instituicao</option>
                {instituicao.map((inst) => {
                    return(
                    <option key={inst.id} value={inst.name}>
                        {inst.name}
                    </option>
                    )
                })}
            </select>
        </div>
    );
};

export default InstituicaoEscolhida;