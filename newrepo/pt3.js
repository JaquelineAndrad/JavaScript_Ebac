// =====================================================
// FUNDAMENTOS JAVASCRIPT - PARTE 3
// Arrays, loops, funções e métodos modernos
// =====================================================


// =====================================================
// 1. ARRAYS
// =====================================================

// array armazena vários valores em uma única variável
// os valores ficam dentro de []

let numeros = [10, 20, 30, 40];

console.log("ARRAY:");
console.log(numeros);


// =====================================================
// 2. ACESSANDO POSIÇÕES DO ARRAY
// =====================================================

// arrays usam índice
// o primeiro índice sempre começa em 0

console.log("\nÍNDICES:");
console.log("Primeiro valor:", numeros[0]);
console.log("Segundo valor:", numeros[1]);


// =====================================================
// 3. LENGTH
// =====================================================

// length mostra quantos itens existem no array

console.log("\nLENGTH:");
console.log(numeros.length);


// =====================================================
// 4. PUSH
// =====================================================

// push adiciona valor no final do array

numeros.push(50);

console.log("\nPUSH:");
console.log(numeros);


// =====================================================
// 5. POP
// =====================================================

// pop remove o último item do array

numeros.pop();

console.log("\nPOP:");
console.log(numeros);


// =====================================================
// 6. SHIFT
// =====================================================

// shift remove o primeiro item

numeros.shift();

console.log("\nSHIFT:");
console.log(numeros);


// =====================================================
// 7. UNSHIFT
// =====================================================

// unshift adiciona valor no começo

numeros.unshift(5);

console.log("\nUNSHIFT:");
console.log(numeros);


// =====================================================
// 8. INCLUDES
// =====================================================

// includes verifica se o valor existe no array
// retorna true ou false

console.log("\nINCLUDES:");
console.log(numeros.includes(30));
console.log(numeros.includes(100));


// =====================================================
// 9. INDEXOF
// =====================================================

// indexOf procura posição do valor
// se não encontrar retorna -1

console.log("\nINDEXOF:");
console.log(numeros.indexOf(30));
console.log(numeros.indexOf(100));


// =====================================================
// 10. FOREACH
// =====================================================

// forEach percorre item por item do array

console.log("\nFOREACH:");

numeros.forEach((numero) => {

  console.log(numero);

});


// =====================================================
// 11. MAP
// =====================================================

// map cria um novo array
// transformando os valores antigos

let dobrados = numeros.map((numero) => {

  return numero * 2;

});

console.log("\nMAP:");
console.log(dobrados);


// =====================================================
// 12. FILTER
// =====================================================

// filter cria novo array
// contendo apenas valores que passaram na condição

let maioresQue20 = numeros.filter((numero) => {

  return numero > 20;

});

console.log("\nFILTER:");
console.log(maioresQue20);


// =====================================================
// 13. FIND
// =====================================================

// find retorna o primeiro valor encontrado

let encontrado = numeros.find((numero) => {

  return numero > 20;

});

console.log("\nFIND:");
console.log(encontrado);


// =====================================================
// 14. REDUCE
// =====================================================

// reduce reduz todos os valores para um único resultado
// muito usado para soma

let soma = numeros.reduce((acumulador, numero) => {

  return acumulador + numero;

}, 0);

console.log("\nREDUCE:");
console.log(soma);


// =====================================================
// 15. FOR
// =====================================================

// for cria repetição
// começa em 0
// continua enquanto i for menor que o tamanho do array
// i++ adiciona +1 a cada repetição

console.log("\nFOR:");

for (let i = 0; i < numeros.length; i++) {

  console.log(numeros[i]);

}


// =====================================================
// 16. WHILE
// =====================================================

// while repete enquanto condição for verdadeira

console.log("\nWHILE:");

let contador = 0;

while (contador < 3) {

  console.log(contador);

  contador++;

}


// =====================================================
// 17. FUNÇÕES
// =====================================================

// function cria uma função
// função agrupa código reutilizável

function somar(a, b) {

  return a + b;

}

// return devolve resultado da função

console.log("\nFUNCTION:");
console.log(somar(10, 5));


// =====================================================
// 18. ARROW FUNCTION
// =====================================================

// arrow function é forma moderna de escrever função

const multiplicar = (a, b) => {

  return a * b;

};

console.log("\nARROW FUNCTION:");
console.log(multiplicar(5, 2));


// =====================================================
// 19. SPLIT
// =====================================================

// split divide string em partes
// resultado vira array

let frase = "JavaScript moderno";

console.log("\nSPLIT:");
console.log(frase.split(" "));


// =====================================================
// 20. JOIN
// =====================================================

// join junta array em uma string

let palavras = ["Curso", "de", "JavaScript"];

console.log("\nJOIN:");
console.log(palavras.join(" "));


// =====================================================
// 21. TOUPPERCASE E TOLOWERCASE
// =====================================================

// toUpperCase deixa texto maiúsculo
// toLowerCase deixa texto minúsculo

let texto = "JavaScript";

console.log("\nUPPERCASE:");
console.log(texto.toUpperCase());

console.log("\nLOWERCASE:");
console.log(texto.toLowerCase());


// =====================================================
// 22. TRIM
// =====================================================

// trim remove espaços extras do começo e fim

let usuario = "   admin   ";

console.log("\nTRIM:");
console.log(usuario.trim());


// =====================================================
// 23. OBJETOS MAIS AVANÇADOS
// =====================================================

let produto = {

  nome: "Notebook",
  preco: 3000,
  disponivel: true

};

// Object.keys retorna as chaves do objeto

console.log("\nOBJECT.KEYS:");
console.log(Object.keys(produto));

// Object.values retorna os valores

console.log("\nOBJECT.VALUES:");
console.log(Object.values(produto));

// Object.entries retorna chave e valor

console.log("\nOBJECT.ENTRIES:");
console.log(Object.entries(produto));