type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  rosa: 'pink',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
};

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('rosa', coresObj));