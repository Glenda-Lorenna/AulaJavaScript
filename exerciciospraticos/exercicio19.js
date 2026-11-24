function executar() {
  const resultado = document.querySelector("#resultado");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "dados.txt", true);
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      resultado.textContent = xhr.responseText;
    } else {
      resultado.textContent = `Erro ao carregar dados.txt (status ${xhr.status}). Use um servidor local.`;
    }
  };
  xhr.onerror = function() {
    resultado.textContent = "Não foi possível carregar dados.txt. Abra a página em um servidor local.";
  };
  xhr.send();
}
