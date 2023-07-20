// import React, { useState } from "react";
// import ListarDados from '../../Api/useDados'
// import InstituicaoEscolhida from "../../Componentes/instituicao";

// const Comparador = () => {
//     const { instituicao } = ListarDados();
//     const  [instituicaoSelecionada, setInstituicaoSelecionada] = useState('');

// const handleInstituicaoChange = (event) => {
//     setInstituicaoSelecionada(event.target.value);
// }

// return ( 
//     <div>
//         <InstituicaoEscolhida
//     instituicao={instituicao}
//     instituicaoSelecionada={instituicaoSelecionada}
//     onchange={handleInstituicaoChange} />
//     </div>
// );
// }


import { useState } from 'react';
import ListarDados from '../../Api/useDados'
import { Link } from 'react-router-dom';

const Comparador = () => {
    const { instituicao, campus, curso, estado } = ListarDados();
    const [instituicaoSelecionada, setInstituicaoSelecionada] = useState([]);
    const [campusSelecionado, setCampusSelecionado] = useState([]);
    const [cursoSelecionado, setCursoSelecionado] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState([])

    const handleInstituicaoChange = (event) => {
        setInstituicaoSelecionada(event.target.value);
    };

    const handleCampusChange = (event) => {
        setCampusSelecionado(event.target.value)
    };

    const handleCursoChange = (event) => {
        setCursoSelecionado(event.target.value)
    };

    const handleEstadoChange = (event) => {
        setEstadoSelecionado(event.target.value)
    };

    return (
        <div>
            <h1> Instituição </h1>
            <select value={instituicaoSelecionada} onChange={handleInstituicaoChange}>
                <option value="">Selecione uma instituição</option>
                {instituicao.map((inst) => (
                    <option key={inst.id} value={inst.name}>
                    </option>
                ))}
            </select>
            <h2>CAMPUS</h2>
            <select value={campusSelecionado} onChange={handleCampusChange}>
                <option value="">Selecione um campus</option>
                {campus.map((camp) => (
                    <option key={camp.id} value={camp.name}>
                        {camp.name}
                    </option>
                ))}
            </select>
            <h2>CURSO</h2>
            <select value={cursoSelecionado} onChange={handleCursoChange}>
                <option value="">Selecione um Curso</option>
                {curso.map((curs) => (
                    <option key={curs.id} value={curs.name}>
                        {curs.name}
                    </option>
                ))}
            </select>
            <h2>ESTADO</h2>
            <select value={estadoSelecionado} onChange={handleEstadoChange}>
                <option value="">Selecione O Estado</option>
                {estado.map((est) => (
                    <option key={est.id} value={est.name}>
                        {est.uf}
                    </option>
                ))}
            </select>
            <Link to="/cadastro"> Quero esse!</Link>

        </div>
    );
};

export default Comparador;