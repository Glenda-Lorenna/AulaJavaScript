function executar() {
  var nome = "Maria";
  let idade = 30;
  const ativo = true;
  let indefinido;
  let vazio = null;

  console.log("nome:", nome, typeof nome);
  console.log("idade:", idade, typeof idade);
  console.log("ativo:", ativo, typeof ativo);
  console.log("indefinido:", indefinido, typeof indefinido);
  console.log("vazio:", vazio, typeof vazio);

  document.querySelector("#resultado").textContent =
    `string: ${nome}
number: ${idade}
boolean: ${ativo}
undefined: ${indefinido}
null: ${vazio}`;
}
