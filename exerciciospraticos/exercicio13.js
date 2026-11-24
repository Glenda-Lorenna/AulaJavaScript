function executar() {
  const texto = "Aprendendo JavaScript";
  const char = texto.charAt(0);
  const indice = texto.indexOf("JavaScript");
  const maiusculas = texto.toUpperCase();
  const substituida = texto.replace("JavaScript", "JS");

  const resultado = `charAt(0): ${char}
indexOf("JavaScript"): ${indice}
toUpperCase(): ${maiusculas}
replace(): ${substituida}`;
  console.log(resultado);
  document.querySelector("#resultado").textContent = resultado;
}
