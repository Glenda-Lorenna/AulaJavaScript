# Aula de JavaScript

Este repositório reúne exercícios e exemplos práticos desenvolvidos durante o estudo de JavaScript.

## O que é JavaScript?

JavaScript é uma linguagem de programação usada para tornar páginas da web interativas. Com ela, podemos responder a cliques, validar informações, calcular resultados, alterar elementos da tela e carregar dados sem recarregar a página.

Nesta disciplina, o objetivo é aprender a lógica de programação e os principais recursos da linguagem de forma prática. Os exercícios ajudam a desenvolver o raciocínio, compreender a estrutura do código e aplicar o JavaScript em páginas HTML.

## Estrutura das pastas

- **[10exercicios](./10exercicios)**: contém 10 exercícios básicos, com páginas HTML individuais e seus respectivos arquivos JavaScript.
- **[exerciciospraticos](./exerciciospraticos)**: contém os 20 exercícios práticos resolvidos a partir da lista de atividades.
- **[exerciciosweb](./exerciciosweb)**: reúne projetos adicionais com HTML, CSS e JavaScript.
- **[teste](./teste)**: pasta reservada para testes e experimentos.

## Exercícios resolvidos

A pasta `exerciciospraticos` possui uma página inicial chamada `index.html`, que apresenta os links para todos os exercícios.

Os exercícios foram divididos da seguinte forma:

1. Variáveis e tipos
2. Operadores aritméticos
3. Operadores de comparação
4. Condicional `if/else`
5. Operador ternário
6. Laço `for`
7. Laços `while` e `do...while`
8. Funções simples
9. Funções atribuídas a variáveis
10. Arrays e métodos
11. Objetos literais
12. Métodos em objetos
13. Manipulação de strings
14. Funções recebidas como argumentos
15. Manipulação do DOM
16. Criação dinâmica de elementos
17. Uso de `prototype`
18. Tratamento de exceções
19. Uso de `XMLHttpRequest`
20. Projeto com AJAX, XML e DOM

## Como os exercícios foram resolvidos

Cada exercício possui um arquivo HTML e um arquivo JavaScript. Os arquivos HTML mostram o enunciado e o botão de execução. Os arquivos JavaScript contêm a solução e exibem o resultado na página ou no console do navegador.

Para os exercícios de lógica, foram utilizados recursos como variáveis, operadores, condicionais, laços de repetição, funções, arrays e objetos.

Nos exercícios com páginas, foi utilizado o DOM para selecionar elementos, alterar conteúdo e estilo ou criar elementos HTML. Nos exercícios 19 e 20, o `XMLHttpRequest` foi usado para carregar dados de arquivos locais.

## Como executar

1. Abra a pasta `exerciciospraticos`.
2. Abra o arquivo `index.html` no navegador.
3. Clique no exercício que deseja testar.
4. Para verificar mensagens técnicas, pressione `F12` e abra a aba **Console**.

Os exercícios 19 e 20 utilizam requisições locais e devem ser executados por um servidor local. Na pasta, pode-se usar o seguinte comando:

```bash
python -m http.server 4173
```

Depois, acesse:

```text
http://localhost:4173
```
