export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto();
    return result + ' HEYYYYYYYY';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'O nome do cliente é: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('Guilherme', 'Marins', 25, '111.111.111-11');
const aluno1 = new Aluno('Guilherme', 'Marins', 25, '111.111.111-11', '001');
const cliente1 = new Cliente('Guilherme', 'Marins', 25, '111.111.111-11');
console.log(pessoa1);
console.log(aluno1);
