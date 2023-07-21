/* eslint-disable react/prop-types */

const EstadoEscolhido = ({ estado, estadoSelecionado, onChange }) => {
  return (
    <div>
      <h1>Estado</h1>
      <select value={estadoSelecionado} onChange={onChange}>
        <option value=""> Selecione o Estado</option>
        {estado.map((est) => {
          return (
            <option key={est.uf} value={est.uf}>
              {est.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default EstadoEscolhido;
