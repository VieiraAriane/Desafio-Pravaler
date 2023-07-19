import { useState, useEffect } from 'react';
import { getInstituicoes, getCampus } from './fetchData';

const ListarDados = () => {
  const [instituicao, setInstituicao] = useState([]);
  const [campus, setCampus] = useState([]);

  useEffect(() => {
     getInstituicoes().then((data) => setInstituicao(data));
     getCampus().then((data) => setCampus(data));
  }, []);


  console.log(instituicao);
  console.log(campus);

  // return faculdade;
};

export default ListarDados;