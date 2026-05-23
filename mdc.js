// Mostra um título no terminal
console.log("=== CALCULADORA DE MDC ===");

// Guarda o primeiro número
let a = 128;

// Guarda o segundo número
let b = 180;

// Mostra os números escolhidos
console.log("Número A:", a);
console.log("Número B:", b);

// Cria uma função
// Função = bloco de código reutilizável
function encontrarDivisores(numero) {

  // Array =lista
  // Array = lista de valores
  let divisores = [];

  // for = estrutura de repetição
  // i começa em 1
  // i vai até o número
  // i++ adiciona +1 a cada volta
  for (let i = 1; i <= numero; i++) {

    // % pega o resto da divisão
    // === significa "exatamente igual"
    // Se resto for 0:
    // então é divisor
    if (numero % i === 0) {

      // push adiciona valor no array
      divisores.push(i);
    }
  }

  // return devolve o resultado
  return divisores;
}

// Executa a função para A
let divisoresA = encontrarDivisores(a);

// Executa a função para B
let divisoresB = encontrarDivisores(b);

// Mostra divisores de A
console.log("Divisores de A:");
console.log(divisoresA);

// Mostra divisores de B
console.log("Divisores de B:");
console.log(divisoresB);

// Array vazio para divisores comuns
let divisoresComuns = [];

// Percorre divisores de A
for (let i = 0; i < divisoresA.length; i++) {

  // Guarda divisor atual
  let divisorAtual = divisoresA[i];

  // includes verifica se existe no array
  if (divisoresB.includes(divisorAtual)) {

    // Adiciona divisor comum
    divisoresComuns.push(divisorAtual);
  }
}

// Mostra divisores comuns
console.log("Divisores comuns:");
console.log(divisoresComuns);

// length mostra tamanho do array
// -1 pega o último valor
let mdc = divisoresComuns[divisoresComuns.length - 1];

// Mostra resultado final
console.log("MDC final:");
console.log(mdc);