fetch('institutions.json')
.then(response => response.json())
.then(data =>{
console.log(data);
})
.catch(error => {
  console.error('Erro na requisição', error)
})

// export function instituicao (nome, estado) {
//   const nomeInstituicao = nome.filter((instituicoes)=> {
//     return instituicoes.includes(estado)
//   })
//   console.log(nomeInstituicao, 'Api, peguei a Api?')
//   return nomeInstituicao
// }