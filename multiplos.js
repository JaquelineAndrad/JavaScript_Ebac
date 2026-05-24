console.log(" SOMA DOS MÚLTIPLOS DE 5 OU 7");
console.log("================================================");

function calcularSoma() {

  console.log("CRIANDO UMA CAIXA PARA GUARDAR A SOMA");

  // começa vazia
  let somaTotal = 0;

  console.log("A soma começa em:");
  console.log(somaTotal);

  console.log("================================================");

  console.log("AGORA VAMOS OLHAR TODOS OS NÚMEROS DE 1 ATÉ 999");

  // começa no 1
  // vai até 999
  // aumenta +1 a cada repetição

  for (let numeroAtual = 1; numeroAtual < 1000; numeroAtual++) {

    console.log("ANALISANDO O NÚMERO:");
    console.log(numeroAtual);

    console.log("--------------------------------");

    console.log("VERIFICANDO SE ELE É MÚLTIPLO DE 5");

    // verifica se sobra resto na divisão
    let restoDaDivisaoPor5 = numeroAtual % 5;

    console.log("RESTO DA DIVISÃO POR 5:");
    console.log(restoDaDivisaoPor5);

    console.log("--------------------------------");

    console.log("VERIFICANDO SE ELE É MÚLTIPLO DE 7");

    let restoDaDivisaoPor7 = numeroAtual % 7;

    console.log("RESTO DA DIVISÃO POR 7:");
    console.log(restoDaDivisaoPor7);

    console.log("--------------------------------");

    // se o resto for zero
    // então é múltiplo

    let ehMultiploDe5 = restoDaDivisaoPor5 === 0;
    let ehMultiploDe7 = restoDaDivisaoPor7 === 0;

    console.log("É MÚLTIPLO DE 5?");
    console.log(ehMultiploDe5);

    console.log("É MÚLTIPLO DE 7?");
    console.log(ehMultiploDe7);

    console.log("--------------------------------");

    // se for múltiplo de 5 OU de 7

    if (ehMultiploDe5 || ehMultiploDe7) {

      console.log("✅ O NÚMERO FOI ACEITO");

      console.log("SOMANDO O NÚMERO NA CAIXA DA SOMA");

      somaTotal = somaTotal + numeroAtual;

      console.log("NOVO VALOR DA SOMA:");
      console.log(somaTotal);

    } else {

      console.log("❌ NÚMERO IGNORADO");
    }

    console.log("================================================");
  }

  console.log("PROCESSO FINALIZADO");

  console.log("SOMA FINAL:");
  console.log(somaTotal);

  return somaTotal;
}

calcularSoma();