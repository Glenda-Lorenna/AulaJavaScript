function executar() {
  const carro = {
    modelo: "SUV", ano: 2025, motor: 1.6,
    consumo(km) {
      const kmPorLitro = this.motor >= 2 ? 10 : 14;
      return km / kmPorLitro;
    }
  };
  const km = Number(prompt("Distância em km:", "100"));
  const litros = carro.consumo(km);
  const texto = `Motor ${carro.motor}: aproximadamente ${litros.toFixed(2)} litros para ${km} km.`;
  console.log(texto);
  document.querySelector("#resultado").textContent = texto;
}
