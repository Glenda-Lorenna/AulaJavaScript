function executar() {
  let numeros = [];
  for (let i = 1; i <= 10; i++) numeros.push(i);
  console.log(...numeros);
  document.querySelector("#resultado").textContent = numeros.join(" ");
}
