export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  set cpf(valor: string) {
    console.log('SETTER CHAMADO');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}


const pessoa1 = new Pessoa('Guilherme', 'Marins', 25, '111.111.111-11');
pessoa1.cpf = '123.456.789-00';
console.log(pessoa1.cpf);

