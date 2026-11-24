function executar() {
  const paragrafo = document.createElement("p");
  paragrafo.textContent = "Este parágrafo foi criado dinamicamente com JavaScript.";
  paragrafo.className = "item-criado";
  document.body.querySelector("main").appendChild(paragrafo);
  document.querySelector("#resultado").textContent = "Parágrafo criado abaixo do botão!";
}
