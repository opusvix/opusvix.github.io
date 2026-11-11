---
layout: default
alt_url: /en/projetos/monitoramento-glicemia.html
title: "Glicemia no Power BI"
description: Dashboard Power BI que analisa medições diárias de glicemia por refeição, rotina e dias úteis × fins de semana, versionado em Git com PBIR.
---

# Glicemia no Power BI

Dashboard no Power BI que analisa as medições diárias de glicemia: evolução no tempo, comportamento por refeição, impacto da rotina e diferenças entre dias úteis e fins de semana.

![Página Visão Geral](/assets/projetos/glicemia-powerbi/visao-geral.webp)

## O problema

As medições eram anotadas todos os dias numa planilha Excel, mas a planilha não mostra padrões: qual refeição provoca picos, se o fim de semana é pior, se a tendência está melhorando.

## O que construí

- **Modelo de dados:** tabela calendário dedicada (`dCalendario[Date] 1 → * fGlicemia[Data]`) para análises por período, dia da semana, fim de semana e acumulados.
- **Medidas DAX:** média em jejum, média por refeição, média geral diária, média móvel de 7 dias, classificação por faixa glicêmica, dias úteis × fins de semana e análise de horários.
- **4 páginas:** Visão Geral (KPIs, evolução do jejum, média móvel), Por Refeição (jejum, almoço e jantar, picos), Rotina e Comportamento (dias úteis × fins de semana, dispersão horário × glicemia) e Detalhamento Diário (tabela com formatação condicional).
- **Legenda de cores:** 🟢 aceitável < 125 mg/dL · 🟡 atenção < 180 mg/dL · 🔴 alerta acima de 180 mg/dL.
- **Formato PBIR** (Power BI Project), com medidas e visuais versionados em Git.

![Página Rotina e Comportamento](/assets/projetos/glicemia-powerbi/rotina.webp)

## Resultado: o que os dados mostraram

- Fins de semana têm média maior que os dias úteis.
- Refeições mais tarde tendem a vir com glicemia mais alta.
- O controle é mais estável nos dias de rotina regular.
- A glicemia antes do jantar é a que mais varia.

Esses achados levaram ao [app de monitoramento](/projetos/glicemia-app.html), que traz os mesmos indicadores para o registro diário.

## Tecnologias

Power BI, DAX, Excel, modelagem dimensional e storytelling com dados. Os dados não contêm informações identificáveis.

🔗 [Dashboard interativo](https://app.powerbi.com/view?r=eyJrIjoiZmM0OTE1NTgtYTM0MC00MmIyLThkZmYtZmRmZmIxN2VlNGYxIiwidCI6ImRhM2QxODEwLThlN2YtNGM1Yy1hMzE3LTBjY2I3ZWY2MmIzYSJ9){:target="_blank" rel="noopener"} · [Código no GitHub](https://github.com/opusvix/glicemia-powerbi){:target="_blank" rel="noopener"} · [Storytelling completo](https://github.com/opusvix/glicemia-powerbi/blob/main/docs/storytelling.md){:target="_blank" rel="noopener"}
