let numeros = [12, 5, 99, 34, 1, 50];

console.log("ARRAY ORIGINAL:");
console.log(numeros);

console.log("-------------------");

console.log("TAMANHO DO ARRAY:");
console.log(numeros.length);

console.log("-------------------");

console.log("MAIOR VALOR:");
console.log(Math.max(...numeros));

console.log("-------------------");

console.log("MENOR VALOR:");
console.log(Math.min(...numeros));

console.log("-------------------");

console.log("ÍNDICE DO MAIOR VALOR:");
console.log(numeros.indexOf(Math.max(...numeros)));

console.log("-------------------");

console.log("ÍNDICE DO MENOR VALOR:");
console.log(numeros.indexOf(Math.min(...numeros)));

console.log("-------------------");

console.log("ADICIONANDO NOVO NÚMERO:");

numeros.push(200);

console.log(numeros);

console.log("-------------------");

console.log("PERCORRENDO ARRAY:");

numeros.forEach((numero) => {
  console.log(numero);
});