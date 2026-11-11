---
layout: default
alt_url: /en/projetos/suporte-operacional-google.html
title: "Monitoramento de Suporte Operacional"
description: Pipeline de BI no ecossistema Google (Sheets, BigQuery, Looker Studio) para monitorar volume, SLA, backlog e capacidade de atendimento.
---

# Monitoramento de Suporte Operacional

Pipeline completo de BI no ecossistema Google para monitorar um ambiente simulado de suporte operacional: volume de atendimentos, cumprimento de SLA e evolução da demanda.

![Visão Geral Executiva](/assets/projetos/suporte-operacional/visao-geral.webp)

## O problema

Equipes de suporte precisam acompanhar volume de atendimentos, SLA e demanda ao longo do tempo. Sem uma visão integrada, o planejamento de capacidade e a priorização de ações corretivas viram chute.

## O que construí

```text
Google Sheets (dados simulados)
    ↓
BigQuery (staging + modelo analítico)
    ↓
Looker Studio (dashboards)
```

- **Camadas separadas** de dados brutos e tratados no BigQuery, em SQL padrão.
- **Visão Geral Executiva:** total de atendimentos, tempo médio, SLA global e distribuição por status, unidade e prioridade.
- **Análise Operacional:** volume, tempo médio e SLA por unidade e prioridade, com tabela analítica de atendimentos.
- **Tendências & Planejamento:** evolução da demanda, tendência de SLA, crescimento por prioridade e abertos × fechados.

![Arquitetura](/assets/projetos/suporte-operacional/arquitetura.webp)

## Resultado (1/out/2025 a 21/jan/2026, dados simulados)

| Indicador | Valor |
| --- | --- |
| Total de atendimentos | 300 |
| Backlog (abertos ou em andamento) | 203 |
| Tempo médio de resolução (só concluídos) | 37 horas |
| % concluídos dentro do SLA | 72,2% |

| Unidade | Atendimentos | SLA |
| --- | --- | --- |
| A | 77 | 80,8% |
| C | 72 | 71,4% |
| D | 80 | 71,4% |
| B | 71 | 63,6% |

A leitura que o dashboard permite: 2 em cada 3 chamados (203 de 300) ainda estão em aberto, e a Unidade B fica 17 pontos percentuais abaixo da Unidade A com volume parecido. Ou seja, o problema não é só volume, é processo.

### Insights simulados

- A demanda cresce gradualmente mês a mês.
- Unidades com mais volume têm maior risco de violar o SLA.
- Atendimentos de prioridade alta pedem reforço de equipe.
- Backlog crescente indica necessidade de ajustar a capacidade.

O dashboard apoia decisões de reforço de equipe por unidade, revisão de SLA por prioridade e planejamento de capacidade.

## Tecnologias

Google Sheets, BigQuery (SQL padrão), Looker Studio e GitHub.

🔗 [Dashboard interativo](https://lookerstudio.google.com/s/sD-EnJFnXEU){:target="_blank" rel="noopener"} · [Código no GitHub](https://github.com/opusvix/SuporteOperacional-StackGoogle){:target="_blank" rel="noopener"}
