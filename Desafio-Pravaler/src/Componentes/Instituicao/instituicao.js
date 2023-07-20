/* eslint-disable react/prop-types */
import React from "react";

const InstituicaoEscolhida = ({ instituicao, instituicaoSelecionada, onchange }) => {
    return (
        <div>
            <h1>Instituica</h1>
            <select value={instituicaoSelecionada} onChange={onchange}>
                <option value=""> Seleciona uma instituicao</option>
                {instituicao.map((inst) => {
                    <option key={inst.id} value={inst.name}>
                        {inst.name}
                    </option>
                })}
            </select>
        </div>
    );
};

export default InstituicaoEscolhida;