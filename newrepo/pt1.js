// ===================================
// FUNDAMENTOS JAVASCRIPT
// ===================================


// ===================================
// VARIÁVEIS
// ===================================

// let cria uma variável
// variável é um espaço que guarda informação
let texto = "JavaScript";

// console.log mostra informações no terminal
console.log("VALOR INICIAL:", texto);


// a variável pode receber outro valor depois
texto = "Node.js";

console.log("NOVO VALOR:", texto);


// ===================================
// CONSTANTES
// ===================================

// const cria uma constante
// constante é um valor que não deve mudar
const tecnologia = "ECMAScript";

console.log("CONSTANTE:", tecnologia);


// ===================================
// TIPOS DE DADOS
// ===================================

// string representa texto
let cidade = "Goiânia";

// number representa números
let numero = 30;

// boolean representa verdadeiro ou falso
let ativo = true;

console.log("STRING:", cidade);
console.log("NUMBER:", numero);
console.log("BOOLEAN:", ativo);


// ===================================
// LINGUAGEM DINÂMICA
// ===================================

// JavaScript é linguagem dinâmica
// isso significa que uma variável pode mudar de tipo

let valor = "10";

// typeof é um operador
// ele verifica o tipo do dado

console.log("TIPO INICIAL:", typeof valor);


// ===================================
// CONVERTENDO STRING PARA NUMBER
// ===================================

// Number() converte texto para número

valor = Number(valor);

console.log("VALOR CONVERTIDO:", valor);

// typeof verifica novamente o tipo

console.log("NOVO TIPO:", typeof valor);


// ===================================
// CONVERTENDO NUMBER PARA STRING
// ===================================

// String() converte número para texto

valor = String(valor);

console.log("VALOR COMO STRING:", valor);

console.log("TIPO ATUAL:", typeof valor);


// ===================================
// BOOLEAN
// ===================================

// boolean possui apenas dois valores
// true = verdadeiro
// false = falso

let ligado = true;
let desligado = false;

console.log("BOOLEAN TRUE:", ligado);
console.log("BOOLEAN FALSE:", desligado);


// ===================================
// OPERADORES ARITMÉTICOS
// ===================================

// + soma
console.log("SOMA:", 10 + 5);

// - subtração
console.log("SUBTRAÇÃO:", 10 - 5);

// * multiplicação
console.log("MULTIPLICAÇÃO:", 10 * 5);

// / divisão
console.log("DIVISÃO:", 10 / 5);

// % pega o resto da divisão
console.log("RESTO DA DIVISÃO:", 10 % 3);


// ===================================
// OPERAÇÕES ARITMÉTICAS COMPLEXAS
// ===================================

// JavaScript segue ordem matemática
// multiplicação acontece antes da soma

console.log("RESULTADO:", 10 + 5 * 2);

// parênteses mudam prioridade

console.log("RESULTADO COM PARÊNTESES:", (10 + 5) * 2);


// ===================================
// OPERADORES DE ATRIBUIÇÃO
// ===================================

let pontos = 10;

// += adiciona valor na variável
pontos += 5;

console.log("ADIÇÃO:", pontos);

// -= subtrai valor
pontos -= 3;

console.log("SUBTRAÇÃO:", pontos);

// *= multiplica valor
pontos *= 2;

console.log("MULTIPLICAÇÃO:", pontos);


// ===================================
// COMPARAÇÃO ESTRITA E SOLTA
// ===================================

// == compara apenas valor
console.log("COMPARAÇÃO SOLTA:", 10 == "10");

// === compara valor E tipo
console.log("COMPARAÇÃO ESTRITA:", 10 === "10");


// ===================================
// MAIOR E MENOR
// ===================================

// > maior que
console.log("10 É MAIOR QUE 5?", 10 > 5);

// < menor que
console.log("5 É MENOR QUE 10?", 5 < 10);

// >= maior ou igual
console.log("10 É MAIOR OU IGUAL A 10?", 10 >= 10);

// <= menor ou igual
console.log("5 É MENOR OU IGUAL A 10?", 5 <= 10);


// ===================================
// COERÇÃO DE TIPOS
// ===================================

// string + number vira texto

console.log("COERÇÃO:", "10" + 5);

// Number() evita coerção

console.log("SEM COERÇÃO:", Number("10") + 5);


// ===================================
// CONCATENAÇÃO DE STRING
// ===================================

// concatenação junta textos

let nome = "JavaScript";
let nivel = "Fundamentos";

console.log(nome + " " + nivel);


// ===================================
// SLICE
// ===================================

// slice corta parte da string

let linguagem = "JavaScript";

// começa no índice 0
// termina antes do índice 4

console.log("SLICE:", linguagem.slice(0, 4));


// ===================================
// IF E ELSE
// ===================================

// if cria condição
// else executa quando a condição é falsa

let idadeUsuario = 18;

if (idadeUsuario >= 18) {

  console.log("MAIOR DE IDADE");

} else {

  console.log("MENOR DE IDADE");

}


// ===================================
// AND OR NOT
// ===================================

// && significa AND (E)

console.log("AND:", true && true);

// || significa OR (OU)

console.log("OR:", true || false);

// ! significa NOT (NÃO)

console.log("NOT:", !true);


// ===================================
// PRECEDÊNCIA DE OPERADORES
// ===================================

// AND possui prioridade maior que OR

console.log(true || false && false);

// parênteses mudam prioridade

console.log((true || false) && false);


// ===================================
// SWITCH E CASE
// ===================================

// switch compara vários casos

let dia = 2;

switch (dia) {

  case 1:
    console.log("DOMINGO");
    break;

  case 2:
    console.log("SEGUNDA");
    break;

  default:
    console.log("OUTRO DIA");
}


// ===================================
// SWITCH COM STRING
// ===================================

let perfil = "admin";

switch (perfil) {

  case "admin":
    console.log("ACESSO TOTAL");
    break;

  case "user":
    console.log("ACESSO LIMITADO");
    break;

  default:
    console.log("SEM ACESSO");
}


// ===================================
// TRUTHY E FALSY
// ===================================

// valores falsy:
// false
// 0
// ""
// null
// undefined
// NaN

let valorVazio = "";

if (valorVazio) {

  console.log("VALOR TRUE");

} else {

  console.log("VALOR FALSE");
}


// ===================================
// OPERADOR TERNÁRIO
// ===================================

// operador ternário é um if/else resumido

let idadePessoa = 20;

let resultado =
  idadePessoa >= 18
    ? "MAIOR DE IDADE"
    : "MENOR DE IDADE";

console.log(resultado);


// ===================================
// OBJETOS E KEY VALUE PAIRS
// ===================================

// objeto guarda informações organizadas

let usuario = {

  // chave: valor
  nome: "Ana",
  idade: 25,
  ativo: true

};

// acessando valores do objeto

console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.ativo);