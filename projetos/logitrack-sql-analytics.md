---
layout: default
title: LogiTrack SQL Analytics
---

# 🚛 LogiTrack SQL Analytics

---

# 🇧🇷 Versão em Português

## 📌 Objetivo

O projeto simula um ambiente logístico com 2.1 milhões de registros,
focado em otimização de consultas SQL e performance em PostgreSQL.

---

## 🏗 Modelo de dados

![Modelo de dados](/assets/projetos/logitrack/modelo-dados.webp)

---

## 🗄 Fonte de Dados

- PostgreSQL
- 2.100.000 registros
- Tabelas particionadas por data

---

## 📊 Métricas

| Métrica | Descrição |
|----------|------------|
| Total Orders | Total de pedidos |
| Orders by Type | Pedidos por tipo de veículo |
| Avg Delivery Time | Tempo médio de entrega |

---

## ⚡ Performance

| Cenário | Tempo |
|----------|--------|
| Antes (sem partição) | 551 ms |
| Depois (com partição) | 0.034 ms |

---

## 📈 Dashboard Power BI

![Dashboard](/assets/projetos/logitrack/dashboard.webp)

---

# 🇺🇸 English Version

## 📌 Objective

This project simulates a logistics database with 2.1M rows,
focused on SQL optimization and partitioning strategies.

---

## 🏗 Data model

![Data model](/assets/projetos/logitrack/modelo-dados.webp)

---

## ⚡ Performance

| Scenario | Execution Time |
|----------|----------------|
| Before Partitioning | 551 ms |
| After Partitioning | 0.034 ms |

---

## 📊 Dashboard

![Dashboard](/assets/projetos/logitrack/dashboard.webp)

---

