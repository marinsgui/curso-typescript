const objetoA: {
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB'
};

objetoA.chaveB = 'Outro valor';

console.log(objetoA);
