@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    nome: string;
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inveter(args[0]);
      this.cor = this.inveter(args[1]);
    }

    inveter(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}


const animal = new Animal('Guilherme', 'Roxo');
console.log(animal);