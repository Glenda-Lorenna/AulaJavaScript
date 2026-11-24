function executar() {
  function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  Pessoa.prototype.falar = function() {
    return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  };
  const pessoa = new Pessoa("Ana", 22);
  console.log(pessoa.falar());
  document.querySelector("#resultado").textContent = pessoa.falar();
}
