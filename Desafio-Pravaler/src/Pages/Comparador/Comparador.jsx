import { useState, useEffect } from "react";
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

import { Header } from "../../Componentes/Header/header";
import { Botao } from "../../Componentes/Botao/botao";
import "./comparador.css";
import { getCursos } from "../../Api/fetchData";
import "./comparador.css"

const Comparador = () => {
  const { instituicao, campus, curso, estado } = ListarDados();
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState("");
  const [campusSelecionado, setCampusSelecionado] = useState("");
  const [cursoSelecionado, setCursoSelecionado] = useState("");
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [exibirSelecoes, setExibirSelecoes] = useState(false);
  const [todosCursos, setTodosCursos] = useState([]);

  useEffect(() => {
    getCursos().then((data) => {
      setTodosCursos(data.courses.filter(dat => dat.name.includes(cursoSelecionado)))
    });
  }, [cursoSelecionado])

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

  const handleEstadoChange = (event) => {
    setEstadoSelecionado(event.target.value);
  };
  const handleExibirSelecoes = () => {
    setExibirSelecoes(true);
  };

  return (
    <>
    <Header />
    <div className="comparador-estilo" >
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

      <Botao onClick={handleExibirSelecoes}>Mostrar Seleções</Botao> 
      {exibirSelecoes && ( 
      
       <div className="Curso-Escolhido">
      {todosCursos.map(curso => {
        
        return <>
        <ul>
        <li>Curso: {curso.name}</li>
        <li>Mensalidade: R${curso.monthly_payment}</li>
        <li>Avaliação do MEC: {curso.mec_avaliation}</li>
        </ul>
        </>        
      })}
      </div>

      )}
      <div className="container-quero">
        
         <Link to="/cadastro"> Quero esse!</Link>
       </div>
    </div>
    </>
  );
};

export default Comparador;
