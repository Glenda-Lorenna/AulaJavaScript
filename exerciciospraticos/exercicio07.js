function executar() {
  let contadorWhile = 1;
  let whileResultado = [];
  while (contadorWhile <= 5) {
    whileResultado.push(contadorWhile);
    contadorWhile++;
  }

  let contadorDo = 1;
  let doResultado = [];
  do {
    doResultado.push(contadorDo);
    contadorDo++;
  } while (contadorDo <= 5);

  const texto = `while: ${whileResultado.join(" ")}
do...while: ${doResultado.join(" ")}
Diferença: while testa antes de executar; do...while executa pelo menos uma vez antes de testar.`;
  console.log(texto);
  document.querySelector("#resultado").textContent = texto;
}
