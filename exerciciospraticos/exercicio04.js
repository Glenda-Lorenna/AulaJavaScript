function executar() {
  const idade = Number(prompt("Digite a idade:", "20"));
  let classificacao;
  if (Number.isNaN(idade) || idade < 0) classificacao = "Informe uma idade válida.";
  else if (idade < 18) classificacao = "Menor de idade";
  else if (idade > 65) classificacao = "Pessoa idosa";
  else classificacao = "Maior de idade";
  console.log(classificacao);
  document.querySelector("#resultado").textContent = classificacao;
}
