# Portfólio de Maurício Barros

Site publicado em **https://opusvix.github.io/** (GitHub Pages), com cópia em GitLab Pages.
Português em `/`, inglês em `/en/`.

## Como incluir um projeto novo (checklist)

1. **Imagens:** salve em `assets/projetos/<slug>/` no formato `.webp`, com no máximo 1200 px de largura.
   A capa do card é `capa.webp` (ou o print principal).
2. **Card:** copie o bloco de [`_data/projetos.yml`](_data/projetos.yml) abaixo e cole **no topo** da lista
   (o site mostra em destaque os 6 primeiros com `destaque: true`). Ao promover um novo, mude o mais antigo para `destaque: false`.
3. **Estudo de caso em PT:** crie `projetos/<slug>.md` no padrão **problema → o que construí → resultado**.
4. **Estudo de caso em EN:** crie `en/projetos/<slug>.md` com `lang: en` e explique entre parênteses os termos brasileiros
   (ex.: *NFC-e (Brazilian electronic receipt)*).
5. **Teste local** (opcional): `bundle exec jekyll serve` e abra http://localhost:4000.
6. **Pull request → merge.** O GitHub Pages publica em ~1 minuto e o espelho copia para o GitLab.

### Modelo do bloco em `_data/projetos.yml`

```yaml
- slug: meu-projeto
  destaque: true
  imagem: /assets/projetos/meu-projeto/capa.webp
  tags: [Power BI, SQL]          # use nomes do filtro (_config.yml > filtros) quando couber
  tags_en: [Power BI, SQL]       # só se alguma tag for em português
  links:
    estudo: /projetos/meu-projeto.html
    estudo_en: /en/projetos/meu-projeto.html
    dashboard: https://app.powerbi.com/view?r=...   # "Publicar na Web" (público)
    github: https://github.com/opusvix/meu-projeto
  pt:
    titulo: Meu Projeto
    alt: Descrição da imagem para leitores de tela
    problema: o que estava errado, em uma frase.
    solucao: o que construí, em uma frase.
    resultado: o número que mudou (antes → depois).
  en:
    titulo: My Project
    alt: Image description for screen readers
    problema: ...
    solucao: ...
    resultado: ...
```

Projetos fora do destaque (`destaque: false`) usam só `titulo` e `resumo` em cada idioma.

### Modelo do estudo de caso

```markdown
---
layout: default
alt_url: /en/projetos/meu-projeto.html
title: "Meu Projeto"
description: Uma frase com o resultado principal (aparece no Google e no LinkedIn).
---

# Meu Projeto

Uma frase sobre o que é.

![Print principal](/assets/projetos/meu-projeto/capa.webp)

## O problema
## O que construí
## Resultado
| Indicador | Valor |
| --- | --- |
## Tecnologias
```

Regra de ouro do resultado: **número + contexto + decisão** ("SLA de 60%: 4 em cada 10 demandas atrasam, então a próxima pergunta é onde").

## Manutenção automática

| O quê | Onde | Quando |
| --- | --- | --- |
| Espelho no GitLab | `.github/workflows/espelho-gitlab.yml` | a cada push na `main` (precisa dos secrets `GITLAB_TOKEN` e `GITLAB_REPO_URL`) |
| Links quebrados | `.github/workflows/links-quebrados.yml` | toda segunda às 9h; abre uma issue se achar problema |
| Contador de visitas | `goatcounter` no `_config.yml` | desligado até preencher o código da conta |

## Estrutura

| Pasta/arquivo | Para quê |
| --- | --- |
| `_data/projetos.yml` | todos os cards (PT e EN) |
| `_data/i18n.yml` | textos fixos do site nos dois idiomas |
| `_layouts/`, `_includes/` | HTML do site |
| `assets/css/style.css` | visual (cores nas variáveis do topo; modo escuro automático) |
| `projetos/`, `en/projetos/` | estudos de caso em PT e EN |
