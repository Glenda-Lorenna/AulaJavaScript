function executar() {
  const xhr = new XMLHttpRequest();
  const resultado = document.querySelector("#resultado");
  xhr.open("GET", "noticias.xml", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        const xml = xhr.responseXML;
        const noticias = xml.getElementsByTagName("noticia");
        resultado.innerHTML = "";
        for (let i = 0; i < noticias.length; i++) {
          const titulo = noticias[i].getElementsByTagName("titulo")[0].textContent;
          const resumo = noticias[i].getElementsByTagName("resumo")[0].textContent;
          const artigo = document.createElement("article");
          artigo.innerHTML = `<h2>${titulo}</h2><p>${resumo}</p>`;
          resultado.appendChild(artigo);
        }
      } else {
        resultado.textContent = "Não foi possível carregar noticias.xml. Use um servidor local.";
      }
    }
  };
  xhr.send();
}
