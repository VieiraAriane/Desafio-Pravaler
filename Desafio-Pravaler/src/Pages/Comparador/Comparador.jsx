import { useState } from "react";
import ListarDados from "../../Componentes/ListarDados";
import InstituicaoEscolhida from "../../Componentes/InstituicaoEscolhida";
import CampusEscolhido from "../../Componentes/CampusEscolhido";
import CursoEscolhido from "../../Componentes/CursoEscolhido";
import EstadoEscolhido from "../../Componentes/EstadoEscolhido";
import { Link } from "react-router-dom";
import { Header } from "../../Componentes/Header/header";
import { Botao } from "../../Componentes/Botao/botao";
import "./comparador.css";


const Comparador = () => {
  const { instituicao, campus, curso, estado } = ListarDados();
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState("");
  const [campusSelecionado, setCampusSelecionado] = useState("");
  const [cursoSelecionado, setCursoSelecionado] = useState("");
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [exibirSelecoes, setExibirSelecoes] = useState(false);


  const handleInstituicaoChange = (event) => {
    setInstituicaoSelecionada(event.target.value);
  };


  const handleCampusChange = (event) => {
    setCampusSelecionado(event.target.value);
  };


  const handleCursoChange = (event) => {
    setCursoSelecionado(event.target.value);
  };


  const handleEstadoChange = (event) => {
    setEstadoSelecionado(event.target.value);
  };
  const handleExibirSelecoes = () => {
    setExibirSelecoes(true);
  };
   
 
  return (
    <>
    <Header />
    <div>
      <InstituicaoEscolhida
        instituicao={instituicao}
        instituicaoSelecionada={instituicaoSelecionada}
        onChange={handleInstituicaoChange}
      />
      <CampusEscolhido
        campus={campus}
        campusSelecionado={campusSelecionado}
        onChange={handleCampusChange}
      />
      <CursoEscolhido
        curso={curso}
        cursoSeleciona={cursoSelecionado}
        onChange={handleCursoChange}
      />
      <EstadoEscolhido
        estado={estado}
        estadoSelecionado={estadoSelecionado}
        onChange={handleEstadoChange}
      />
      <Botao onClick={handleExibirSelecoes}>Mostrar Seleções</Botao> {/* Botão para mostrar as seleções */}
      {exibirSelecoes && ( // Renderizar as seleções somente quando o botão for clicado
        <div>
          <h2>Seleções do Usuário:</h2>
          <p>Instituição: {instituicaoSelecionada}</p>
          <p>Campus: {campusSelecionado}</p>
          <p>Curso: {cursoSelecionado}</p>
          <p>Estado: {estadoSelecionado}</p>
        </div>
      )}
      <div className="container-quero">
        
        <Link className="link-texto" to="/cadastro">Quero este</Link>
       </div>
    </div>
    </>
  );
};


export default Comparador;
