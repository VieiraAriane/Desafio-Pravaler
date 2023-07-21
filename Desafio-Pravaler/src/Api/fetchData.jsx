//acessar o data de instituições
const getInstituicoes = async () => {
    try {
      const response = await fetch('./Data/institutions.json')
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return null;
    }
  }

  //acessar o data de campos
  const getCampus = async () => {
    try {
      const response = await fetch('./Data/campus.json')
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return null;
    }
  };

  //acessar o data de estado
  const getEstados = async () => {
    try {
      const response = await fetch('./Data/estados.json') 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return null;
    }
  };

  //acessar o data de cursos
  const getCursos = async () => {
    try {
      const response = await fetch('./Data/courses.json')
        const data = await response.json();
        return data;
      }catch (error) {
      console.error('Erro ao buscar dados:', error);
      return null;
    }
  };
     
export { getInstituicoes, getCampus, getEstados, getCursos };