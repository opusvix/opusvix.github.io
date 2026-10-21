---
layout: default
title: "Serviços Públicos & Energia Solar"
---

<div align="center">
  <img src="imagens/Cesan.png" alt="CESAN" height="60" />
  &nbsp;&nbsp;&nbsp;
  <img src="imagens/Escelsa.png" alt="EDP Escelsa" height="60" />
  &nbsp;&nbsp;&nbsp;
  <img src="imagens/Solar.png" alt="EDP Solar" height="60" />
</div>

# Serviços Públicos & Energia Solar
### Análise de Consumo, Custos e Créditos de Energia Solar (Power BI)

Este projeto analisa dados históricos de consumo e faturamento de serviços públicos, com foco na avaliação do impacto financeiro dos créditos de energia do programa Solar Digital EDP, estabelecido por contrato de locação de usina de minigeração de energia elétrica. O objetivo é apoiar decisões gerenciais por meio de indicadores financeiros, operacionais e ambientais.

## 🎯 Objetivos

- Analisar a evolução dos custos e do consumo ao longo do tempo
- Avaliar o impacto financeiro da energia solar
- Identificar sazonalidades e oportunidades de eficiência
- Mensurar a contribuição ambiental associada à energia limpa

## 🧩 Escopo do Projeto

* Consumo de energia elétrica (EDP / Escelsa)
* Dados de saneamento (CESAN)
* Indicadores de consumo, custo e variação
* Comparações mensais e anuais

## 📊 Estrutura do Dashboard

- **Página 1 – Visão Geral**
  - Indicadores-chave de consumo, custo e economia
  - Evolução temporal dos custos

- **Página 2 – Consumo & Eficiência**
  - Heatmap sazonal
  - Análise por serviço
  - Indicadores de eficiência

- **Página 3 – Energia Solar & ESG**
  - Economia acumulada
  - Comparativo com vs. sem energia solar
  - Contribuição ambiental (Kg CO₂)

- **Página 4 – Detalhamento Anual**
  - Análise consolidada por ano
  - Apoio à tomada de decisão estratégica

## 🧩 Modelagem de Dados
- Modelo em estrela
- Tabela calendário dedicada
- Relacionamentos unidirecionais (Calendário → Fato)

## 🧮 Principais Medidas DAX
- Consumo Total
- Valor Total
- Custo Bruto
- Economia Solar (R$)
- Custo Líquido
- Economia Solar Acumulada
- % de Economia Solar
- Contribuição Ambiental Total (Kg CO₂)

## 🛠️ Tecnologias Utilizadas
* **Power BI Desktop (PBIP / PBIR)**
* **Power Query (M)** para tratamento de dados
* **DAX** para criação de medidas e indicadores
* **Git & GitHub**
* **VS Code**
* **OneDrive** (fonte de dados)

## 📊 Principais Indicadores
* Consumo total (kWh / m³)
* Custo total e médio
* Variação percentual mensal
* Tendência de consumo

## 📁 Estrutura do Repositório
├── ServicosPublicos.Report
├── ServicosPublicos.SemanaticModel
├── data
├── docs
├── imagens/  
├── .gitignore  
├── README.md  
├── storytelling.md  
├── definition.pbir  
├── ServicosPublicos.pbip

## ▶️ Como Executar
1. Clone o repositório
2. Abra o arquivo `definition.pbir` no Power BI Desktop
3. Atualize a conexão com a base no OneDrive, se necessário

## 🚀 Próximos Passos
- Projeções de economia futura
- Metas e alertas de consumo
- Expansão de indicadores ESG

## 👤 Autor

**Maurício Barros**

Analista de Dados | BI | Power BI | SQL | Python

🔗 GitHub: [https://github.com/opusvix](https://github.com/opusvix)
