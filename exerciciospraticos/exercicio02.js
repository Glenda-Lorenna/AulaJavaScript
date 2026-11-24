function executar() {
  const a = Number(prompt("Digite o primeiro número:", "10"));
  const b = Number(prompt("Digite o segundo número:", "3"));
  if (Number.isNaN(a) || Number.isNaN(b)) {
    document.querySelector("#resultado").textContent = "Informe dois números válidos.";
    return;
  }
  const texto = `Soma: ${a + b}
Subtração: ${a - b}
Multiplicação: ${a * b}
Divisão: ${b === 0 ? "não é possível dividir por zero" : a / b}
Resto: ${b === 0 ? "não definido" : a % b}`;
  console.log(texto);
  document.querySelector("#resultado").textContent = texto;
}
