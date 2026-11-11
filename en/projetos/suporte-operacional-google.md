---
layout: default
lang: en
locale: en_US
alt_url: /projetos/suporte-operacional-google.html
title: Operations Support Monitoring
description: BI pipeline on the Google stack (Sheets, BigQuery, Looker Studio) to monitor ticket volume, SLA, backlog and capacity.
---

# Operations Support Monitoring

A full BI pipeline on the Google stack to monitor a simulated operations support environment: ticket volume, SLA compliance and demand trends.

![Executive overview](/assets/projetos/suporte-operacional/visao-geral.webp)

## The problem

Support teams need to track ticket volume, SLA compliance and demand over time. Without an integrated view, capacity planning and prioritizing corrective actions become guesswork.

## What I built

```text
Google Sheets (simulated data)
    ↓
BigQuery (staging + analytical model)
    ↓
Looker Studio (dashboards)
```

- **Separate raw and modeled layers** in BigQuery, using standard SQL.
- **Executive overview:** total tickets, average handling time, overall SLA, and breakdown by status, unit and priority.
- **Operational analysis:** volume, handling time and SLA by unit and priority, plus a detailed ticket table.
- **Trends & planning:** demand over time, SLA trend, growth by priority and opened vs. closed.

![Architecture](/assets/projetos/suporte-operacional/arquitetura.webp)

## Result (Oct 1, 2025 to Jan 21, 2026, simulated data)

| Indicator | Value |
| --- | --- |
| Total tickets | 300 |
| Backlog (open or in progress) | 203 |
| Average resolution time (closed only) | 37 hours |
| % closed within SLA | 72.2% |

| Unit | Tickets | SLA |
| --- | --- | --- |
| A | 77 | 80.8% |
| C | 72 | 71.4% |
| D | 80 | 71.4% |
| B | 71 | 63.6% |

What the dashboard reveals: 2 in 3 tickets (203 of 300) are still open, and Unit B sits 17 percentage points below Unit A with a similar volume. In other words, the issue isn't just volume, it's process.

### Simulated insights

- Demand grows gradually month over month.
- Units with higher volume carry a higher risk of SLA breaches.
- High-priority tickets need extra staffing.
- A growing backlog signals the need to adjust capacity.

The dashboard supports decisions on staffing by unit, SLA review by priority and future capacity planning.

## Tech stack

Google Sheets, BigQuery (standard SQL), Looker Studio and GitHub. The dashboard interface is in Portuguese.

🔗 [Interactive dashboard](https://lookerstudio.google.com/s/sD-EnJFnXEU){:target="_blank" rel="noopener"} · [Code on GitHub](https://github.com/opusvix/SuporteOperacional-StackGoogle){:target="_blank" rel="noopener"}
