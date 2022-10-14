const dadosCliente1: readonly [number, string] = [1, 'Guilherme'];
const dadosCliente2: [number, string, string] = [1, 'Guilherme', 'Marins'];
const dadosCliente3: [number, string, string?] = [1, 'Guilherme'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Guilherme', 'Marins'];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
