# 🌿 Genner — Psicologia & Neuropsicologia  
### Site institucional moderno • Produto digital • Frontend + Arquitetura

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-7FA99B)
![License](https://img.shields.io/badge/License-Private-lightgrey)

---

## 🧠 Sobre o projeto

Este projeto consiste no desenvolvimento de um **site institucional completo** para um psicólogo clínico, com foco em:

- identidade visual própria  
- narrativa humanizada  
- apresentação profissional  
- estrutura moderna de frontend  
- experiência do usuário  
- conversão via contato  

O site foi concebido como um **produto digital**, não apenas como uma página estática, integrando arquitetura moderna, componentização, fluxo de navegação e preocupação com escalabilidade.

---

## 🎯 Objetivos técnicos

- Construir uma base sólida em **Next.js App Router**
- Criar uma identidade visual consistente
- Desenvolver componentes reutilizáveis
- Implementar páginas com narrativa e hierarquia visual
- Integrar contato funcional (WhatsApp)
- Preparar o projeto para crescimento (APIs, CMS, automações)
- Containerizar o ambiente com Docker (em andamento)

---

## ✨ Funcionalidades

- Página inicial com hero, serviços e chamadas para ação  
- Página “Sobre” humanizada com galeria  
- Página de avaliação neuropsicológica  
- Página de conteúdos (vídeos)  
- Página de contato funcional  
- Componentes reutilizáveis (CTA, cards, seções)  
- Integração direta com WhatsApp  
- Estrutura pronta para integração com APIs  
- Layout responsivo  
- Docker Compose configurado (falta o Dockerfile)  

---

## 🧩 Arquitetura

```
site-genner/
├── site/
│   ├── app/                # Páginas (Next App Router): /, /sobre, /avaliacao, /videos, /contato
│   ├── components/         # Hero, Section, Card, CTA, FeatureGrid, ContactForm
│   ├── public/images/      # Assets e imagens
│   └── package.json        # Next.js 16.1, React 19.2, Tailwind CSS 4, TypeScript 5
├── docker-compose.yml
├── makefile
└── readme.md
```


---

## 🛠️ Stack

- Next.js (App Router)
- React
- TypeScript
- Docker / Docker Compose
- CSS-in-JS (inline styles) + Tailwind CSS 4 (PostCSS)
- Integração com WhatsApp
- Arquitetura modular

---

## ▶️ Rodando localmente

```bash
cd site
npm install
npm run dev

```

Acesse:

``http://localhost:3000``

🐳 Rodando com Docker

``docker-compose up --build``

> ⚠️ O `docker-compose.yml` faz build de `./site`, mas ainda não existe um `Dockerfile` no repositório. É preciso adicioná-lo antes de usar o Docker.


⚙️ Comandos úteis

```bash

make dev          # ambiente de desenvolvimento (npm run dev)
make build        # build do site (npm run build)
make docker-up    # sudo docker-compose up --build
make docker-down  # sudo docker-compose down
make clean        # remove node_modules e .next

```

👨‍💻 Autor

Fabio Stella
Engenharia da Computação
Foco em sistemas, produto digital e soluções técnicas.
