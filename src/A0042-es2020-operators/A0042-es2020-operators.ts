type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  data: new Date,
};

console.log(documento.data?.toDateString() ?? 'Não existe data.');
console.log(undefined ?? 'Não existe data.');
console.log(null ?? 'Não existe data.');
console.log(false ?? 'Não existe data.');