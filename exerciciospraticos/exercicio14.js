function aplicar(funcao, numero) {
  return funcao(numero);
}
function executar() {
  const dobrar = (n) => n * 2;
  const elevarAoQuadrado = (n) => n * n;
  const numero = Number(prompt("Digite um número:", "5"));
  const texto = `Dobro: ${aplicar(dobrar, numero)}
Quadrado: ${aplicar(elevarAoQuadrado, numero)}`;
  console.log(texto);
  document.querySelector("#resultado").textContent = texto;
}
