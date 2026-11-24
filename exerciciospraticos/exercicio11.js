function executar() {
  const carro = { modelo: "Sedan X", ano: 2024, motor: 2.0 };
  console.log(carro);
  console.log("Modelo:", carro.modelo);
  console.log("Ano:", carro.ano);
  console.log("Motor:", carro.motor);
  document.querySelector("#resultado").textContent = `Modelo: ${carro.modelo}
Ano: ${carro.ano}
Motor: ${carro.motor}`;
}
