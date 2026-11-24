function saudacao(nome) {
  return `Olá, ${nome}! Seja bem-vindo(a) ao JavaScript.`;
}
function executar() {
  const nome = prompt("Digite seu nome:", "Maria") || "Visitante";
  const mensagem = saudacao(nome);
  console.log(mensagem);
  document.querySelector("#resultado").textContent = mensagem;
}
