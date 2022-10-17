export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostraColaborador(): void {
    for(const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
    ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/1111-11');
const colaborador1 = new Colaborador('Guilherme', 'Marins');
const colaborador2 = new Colaborador('João', 'Silva');
const colaborador3 = new Colaborador('Maria', 'Júlia');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostraColaborador();

