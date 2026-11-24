function validarNumero(numero) {
  if (numero < 0) throw new Error("Não é permitido informar número negativo.");
  return `Número válido: ${numero}`;
}
function executar() {
  try {
    const numero = Number(prompt("Digite um número:", "-5"));
    document.querySelector("#resultado").textContent = validarNumero(numero);
  } catch (erro) {
    console.error(erro.message);
    document.querySelector("#resultado").textContent = `Erro tratado: ${erro.message}`;
  }
}
