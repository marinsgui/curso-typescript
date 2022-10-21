interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
};

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo2<string, number> = {
  nome: 'Guilherme',
  sobrenome: 'Marins',
  idade: 25,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 25,
};

const aluno3: PessoaProtocolo2 = {
  nome: 'Guilherme',
  sobrenome: 'Marins',
  idade: 25,
};

console.log(aluno1, aluno2, aluno3);