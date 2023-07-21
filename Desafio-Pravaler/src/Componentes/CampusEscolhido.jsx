/* eslint-disable react/prop-types */

const CampusEscolhido = ({ campus, campusSelecionado, onChange }) => {
  return (
    <div>
      <h1>Campus</h1>
      <select value={campusSelecionado} onChange={onChange}>
        <option value=""> Selecione o Campus</option>
        {campus.map((camp) => {
          return (
            <option key={camp.id} value={camp.name}>
              {camp.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CampusEscolhido;
