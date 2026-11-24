function executar() {
  const calcularArea = function(base, altura) {
    return (base * altura) / 2;
  };
  const base = Number(prompt("Base do triângulo:", "10"));
  const altura = Number(prompt("Altura do triângulo:", "6"));
  const area = calcularArea(base, altura);
  const texto = `Área do triângulo: ${area}`;
  console.log(texto);
  document.querySelector("#resultado").textContent = texto;
}
