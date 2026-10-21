---
layout: default
title: "Streaming Graph Database – Neo4j"
---

# 🎬 Streaming Graph Database – Neo4j

Projeto de modelagem de dados em grafos para um serviço de streaming de filmes e séries, utilizando **Neo4j** e **Cypher**, com foco em **relacionamentos** e **sistemas de recomendação**.

O objetivo do projeto é demonstrar como grafos podem ser utilizados para representar conexões complexas entre usuários, conteúdos, gêneros, atores e diretores, indo além de modelos relacionais tradicionais.

---

## 🧠 Visão Geral do Modelo

O modelo foi construído como um **grafo de conhecimento**, permitindo consultas como:

- Conteúdos assistidos por usuários com gostos semelhantes  
- Recomendações baseadas em gêneros, atores ou diretores  
- Análise de similaridade entre filmes e séries  

---

## 🧩 Entidades (Nós)

- `User` – Usuários da plataforma
- `Movie` – Filmes
- `Series` – Séries
- `Genre` – Gêneros de conteúdo
- `Actor` – Atores
- `Director` – Diretores

---

## 🔗 Relacionamentos

| Relacionamento | Descrição |
|---------------|----------|
| `WATCHED` | Usuário assistiu a um conteúdo (possui `rating`) |
| `ACTED_IN` | Ator atuou em um filme ou série |
| `DIRECTED` | Diretor dirigiu um filme ou série |
| `IN_GENRE` | Conteúdo pertence a um gênero |

Exemplo: (User)-[:WATCHED {rating}]->(Movie | Series)

---

## 📐 Modelo Visual do Grafo

O diagrama abaixo foi criado utilizando o **Arrows.app**, ferramenta visual para modelagem em grafos compatível com Neo4j.

[Modelo de Grafo](diagrams/graph-model-arrows.png)

---

## 🧠 Decisões de Modelagem

- Filmes e Séries são entidades distintas, sem relacionamento direto entre si.
- A similaridade entre conteúdos é inferida por gêneros, atores e diretores.
- O relacionamento `WATCHED` é aplicado tanto a filmes quanto a séries e contém a propriedade `rating`.
- O modelo foi pensado para facilitar consultas de recomendação e análises exploratórias.

---

## 🗂 Estrutura do Repositório

```text
streaming-graph-database/
│
├── README.md
│
├── model/
│   ├── constraints.cypher
│   └── graph-data.cypher
│
└── diagrams/
    └── graph-model-arrows.png
```
## ⚙️ Scripts Cypher
'constraints.cypher'

Define constraints de unicidade para garantir integridade do grafo (IDs e nomes únicos).

'graph-data.cypher'

Script gerado a partir do Arrows.app, responsável por criar os nós e relacionamentos do modelo.

## ▶️ Como Executar no Neo4j

Execute primeiro as constraints:

:source model/constraints.cypher

Em seguida, execute o script de dados:

:source model/graph-data.cypher

## 🚀 Possíveis Extensões

- Queries de recomendação baseadas em similaridade

- Análise de caminhos entre usuários e conteúdos

- Aplicação de algoritmos como PageRank

- Expansão do modelo para avaliações textuais


## 👤 Autor

Maurício Barros

Analista de Dados | BI | Grafos | Neo4j

GitHub: https://github.com/opusvix