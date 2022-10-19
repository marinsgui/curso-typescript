interface Pessoa {
  nome: string;
};

interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa1: Pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Marins',
  enderecos: ['Av. Brasil'],
  idade: 25,
};

pessoa1.idade = 26;
console.log(pessoa1);