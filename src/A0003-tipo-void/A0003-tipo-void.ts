function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Marins',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
}

semRetorno('Guilherme', 'Marins');
pessoa.exibirNome();

export { pessoa }
