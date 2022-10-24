interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  return function <T extends Constructor>(target: T): T {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      nome: string;
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inveter(args[0]);
        this.cor = this.inveter(args[1]);
      }

      inveter(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  }
}

function outroDecorador(param: string) {
  return function(target: Constructor) {
    console.log('Sou o outro decorador ' + param);
    return target;
  }
}

@outroDecorador('Param do outro decorador')
@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe')
  }
}

const animal = new Animal('Guilherme', 'Roxo');
console.log(animal);