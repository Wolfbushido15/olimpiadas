function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa e converte para minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    // Se estiver vazio, exibe uma mensagem de erro
    section.innerHTML = "<p>nenhum dado foi encontrado, digite o nome do atleta ou sporte</p>";
    return; // Encerra a função
  }

  // Inicializa variáveis para armazenar os resultados formatados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada elemento (dado) da lista de dados
  for (let dado of dados) {
    // Converte o título, descrição e tags para minúsculas para facilitar a comparação
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Se encontrar uma correspondência, cria um novo elemento HTML para exibir o resultado
      resultados += `<div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">mais informações</a>
      </div>`;
    }
  }

  // Verifica se foram encontrados resultados
  if (!resultados) {
    resultados = "<p>resultado não existe</p>";
  }

  // Atribui o HTML construído à seção de resultados
  section.innerHTML = resultados;
}