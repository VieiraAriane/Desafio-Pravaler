import { useState } from "react";
import ListarDados from "../../Componentes/ListarDados";
import InstituicaoEscolhida from "../../Componentes/InstituicaoEscolhida";
import CampusEscolhido from "../../Componentes/CampusEscolhido";
import CursoEscolhido from "../../Componentes/CursoEscolhido";
import EstadoEscolhido from "../../Componentes/EstadoEscolhido";
import { Link } from "react-router-dom";

const Comparador = () => {
  const { instituicao, campus, curso, estado } = ListarDados();
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState("");
  const [campusSelecionado, setCampusSelecionado] = useState("");
  const [cursoSelecionado, setCursoSelecionado] = useState("");
  const [estadoSelecionado, setEstadoSelecionado] = useState("");

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
    
  
  return (
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
      <Link to="/cadastro"> Quero esse!</Link>
    </div>
  );
};

export default Comparador;
