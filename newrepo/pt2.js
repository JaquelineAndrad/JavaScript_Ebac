// =====================================================
// FUNDAMENTOS JAVASCRIPT - PARTE 2
// Operadores, condições e lógica
// =====================================================


// =====================================================
// 1. OPERADORES ARITMÉTICOS
// =====================================================

// + realiza soma
console.log("SOMA:", 10 + 5);

// - realiza subtração
console.log("SUBTRAÇÃO:", 10 - 5);

// * realiza multiplicação
console.log("MULTIPLICAÇÃO:", 10 * 5);

// / realiza divisão
console.log("DIVISÃO:", 10 / 5);

// % retorna o resto da divisão
// muito usado para descobrir múltiplos
console.log("RESTO DA DIVISÃO:", 10 % 3);

// ** realiza potência
console.log("POTÊNCIA:", 2 ** 3);


// =====================================================
// 2. OPERAÇÕES ARITMÉTICAS COMPLEXAS
// =====================================================

// JavaScript segue prioridade matemática.
// multiplicação acontece antes da soma.
console.log("\nARITMÉTICA COMPLEXA:");
console.log("Resultado:", 10 + 5 * 2);

// parênteses mudam a prioridade
console.log("Com parênteses:", (10 + 5) * 2);


// =====================================================
// 3. OPERADORES DE ATRIBUIÇÃO
// =====================================================

// = atribui valor para variável
let pontos = 10;

console.log("\nATRIBUIÇÃO:");
console.log("Valor inicial:", pontos);

// += soma valor na variável atual
pontos += 5;

console.log("Após += :", pontos);

// -= subtrai valor
pontos -= 3;

console.log("Após -= :", pontos);

// *= multiplica valor
pontos *= 2;

console.log("Após *= :", pontos);

// /= divide valor
pontos /= 4;

console.log("Após /= :", pontos);


// =====================================================
// 4. COMPARAÇÃO SOLTA E ESTRITA
// =====================================================

// == compara apenas o valor
// JavaScript tenta converter os tipos automaticamente
console.log("\nCOMPARAÇÃO SOLTA:");
console.log(10 == "10");

// === compara valor e tipo
// não faz conversão automática
console.log("COMPARAÇÃO ESTRITA:");
console.log(10 === "10");


// =====================================================
// 5. MAIOR, MENOR E IGUAL
// =====================================================

// > verifica se é maior
console.log("\nMAIOR E MENOR:");
console.log(10 > 5);

// < verifica se é menor
console.log(5 < 10);

// >= verifica se é maior ou igual
console.log(10 >= 10);

// <= verifica se é menor ou igual
console.log(5 <= 10);


// =====================================================
// 6. COERÇÃO DE TIPOS
// =====================================================

// JavaScript tenta converter valores automaticamente

console.log("\nCOERÇÃO DE TIPOS:");

// string + number vira string
console.log("10" + 5);

// Number() evita coerção automática
console.log(Number("10") + 5);


// =====================================================
// 7. CONCATENAÇÃO DE STRING
// =====================================================

// concatenação junta textos

let curso = "JavaScript";
let modulo = "Fundamentos";

console.log("\nCONCATENAÇÃO:");
console.log(curso + " " + modulo);


// =====================================================
// 8. SLICE
// =====================================================

// slice corta parte de uma string
// o primeiro número é onde começa
// o segundo é onde termina

let linguagem = "JavaScript";

console.log("\nSLICE:");
console.log(linguagem.slice(0, 4));


// =====================================================
// 9. IF E ELSE
// =====================================================

// if executa código se condição for verdadeira
// else executa se condição for falsa

let idade = 20;

console.log("\nIF E ELSE:");

if (idade >= 18) {

  console.log("MAIOR DE IDADE");

} else {

  console.log("MENOR DE IDADE");

}


// =====================================================
// 10. AND, OR E NOT
// =====================================================

// && significa AND (E)
// precisa que ambos sejam verdadeiros
console.log("\nAND:");
console.log(true && true);

// || significa OR (OU)
// apenas um precisa ser verdadeiro
console.log("\nOR:");
console.log(true || false);

// ! significa NOT (NÃO)
// inverte valor boolean
console.log("\nNOT:");
console.log(!true);


// =====================================================
// 11. PRECEDÊNCIA DE OPERADORES
// =====================================================

// AND possui prioridade maior que OR

console.log("\nPRECEDÊNCIA:");
console.log(true || false && false);

// parênteses mudam prioridade
console.log((true || false) && false);


// =====================================================
// 12. SWITCH E CASE
// =====================================================

// switch compara vários cenários

let dia = 2;

console.log("\nSWITCH CASE:");

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


// =====================================================
// 13. SWITCH COM STRING
// =====================================================

let perfil = "admin";

console.log("\nSWITCH COM STRING:");

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


// =====================================================
// 14. TRUTHY E FALSY
// =====================================================

// valores falsy:
// false
// 0
// ""
// null
// undefined
// NaN

let valorVazio = "";

console.log("\nTRUTHY E FALSY:");

if (valorVazio) {

  console.log("VALOR TRUE");

} else {

  console.log("VALOR FALSE");

}


// =====================================================
// 15. OPERADOR TERNÁRIO
// =====================================================

// operador ternário é um if/else resumido

let acesso = 18 >= 18
  ? "LIBERADO"
  : "NEGADO";

console.log("\nOPERADOR TERNÁRIO:");
console.log(acesso);


// =====================================================
// 16. OBJETOS E KEY VALUE PAIRS
// =====================================================

// objetos armazenam informações organizadas
// cada informação possui:
// chave : valor

let usuario = {

  nome: "Alex",
  idade: 25,
  ativo: true

};

console.log("\nOBJETOS:");

console.log(usuario);

// acessando valores específicos

console.log("Nome:", usuario.nome);
console.log("Idade:", usuario.idade);
console.log("Ativo:", usuario.ativo);