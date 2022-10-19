interface TipoPessoa {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}

interface TipoPessoa2 extends TipoPessoa {};

export class Pessoa implements TipoPessoa2 {
  constructor (public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('Guilherme', 'Marins');
console.log(pessoa1.nomeCompleto());