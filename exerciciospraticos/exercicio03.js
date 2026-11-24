function executar() {
  const a = Number(prompt("Digite o primeiro número:", "8"));
  const b = Number(prompt("Digite o segundo número:", "8"));
  let mensagem;
  if (a === b) mensagem = `${a} é igual a ${b}`;
  else if (a > b) mensagem = `${a} é maior que ${b}`;
  else mensagem = `${a} é menor que ${b}`;
  console.log(mensagem);
  document.querySelector("#resultado").textContent = mensagem;
}
