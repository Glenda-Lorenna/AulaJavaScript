function executar() {
  const idade = Number(prompt("Digite a idade:", "18"));
  const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
  document.querySelector("#resultado").textContent = resultado;
  console.log(resultado);
}
