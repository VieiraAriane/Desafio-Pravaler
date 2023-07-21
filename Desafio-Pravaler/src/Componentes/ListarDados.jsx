import { useState, useEffect } from "react";
import {
  getInstituicoes,
  getCampus,
  getCursos,
  getEstados,
} from "../Api/fetchData";

const ListarDados = () => {
  const [instituicao, setInstituicao] = useState([]);
  const [campus, setCampus] = useState([]);
  const [curso, setCurso] = useState([]);
  const [estado, setEstado] = useState([]);

  useEffect(() => {
    getInstituicoes().then((data) => setInstituicao(data?.institutions || []));
    getCampus().then((data) => setCampus(data?.campus || []));
    getCursos().then((data) => setCurso(data?.courses || []));
    getEstados().then((data) => setEstado(data?.states || []));
  }, []);

  return { instituicao, campus, curso, estado };
};

export default ListarDados;
