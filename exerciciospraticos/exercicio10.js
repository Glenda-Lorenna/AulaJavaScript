function executar() {
  const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"];
  frutas.push("Abacaxi");
  const removida = frutas.pop();
  const parte = frutas.slice(1, 4);
  const texto = `Array completo: ${frutas.join(" | ")}
Parte (slice): ${parte.join(" | ")}
Item removido com pop(): ${removida}`;
  console.log(texto);
  document.querySelector("#resultado").textContent = texto;
}
