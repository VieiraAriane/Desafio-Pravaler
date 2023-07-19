const getInstituicoes = async () => {
    try {
      const response = await fetch('./Data/institutions.json', {
        headers: {
          Accept: 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
  
      const data = await response.json();
      // console.log(data)
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return null;
    }
  }

  const getCampus = async () => {
    try {
      const response = await fetch('./Data/campus.json', {
        headers: {
          Accept: 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return null;
    }
  };
     
export { getInstituicoes, getCampus };