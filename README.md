# CONVIVA — Guia Interativo de Mercados e Feiras (Recife)

Este repositório contém o front-end do projeto "CONVIVA", um site/guia interativo para a Autarquia CONVIVA Mercados e Feiras da Prefeitura do Recife. O objetivo é reunir localização, história, produtos, destaques e informações úteis sobre mercados, feiras livres e centros comerciais da cidade.

## Sobre a CONVIVA

"A CONVIVA Mercados e Feiras Autarquia Municipal é responsável por ordenar diversos equipamentos públicos da capital pernambucana, oferecendo espaços para comércio e interação popular nos bairros da cidade. Dentre esses locais, estão os pátios de feiras, as feiras livres, os centros comerciais, as praças de alimentação, os centros de comércio popular e os mercados públicos, como os localizados na Boa Vista, Madalena, Encruzilhada, Cordeiro, São José e Casa Amarela, totalizando mais de 5.100 boxes e bancos. Vinculada à Secretaria de Ordem Pública e Segurança, a CONVIVA também executa manutenção, revitalização e obras nesses espaços, que são centros de cultura, história e culinária regionais."

## Objetivo do projeto

Criar um guia interativo que permita ao cidadão localizar mercados e feiras, consultar a história dos lugares, saber o que é vendido, ver destaques (produtos/feiras), e acessar informações práticas (horários, contato, infraestrutura e acessibilidade).

## Funcionalidades (visão geral)

- Mapa interativo com a localização dos equipamentos
- Páginas com histórico e descrição de cada mercado/feira
- Lista de produtos e destaques por local
- Busca por nome ou tipo de produto
- Informações úteis: horários, contato, estrutura e acessibilidade
- Visualização responsiva para desktop e mobile

## Tecnologias

- React (front-end)
- Vite (bundle / dev server)
- Tailwind CSS (estilização)
- react-router-dom (navegação)

> Veja `package.json` para dependências e scripts do projeto.

## Como rodar localmente

Pré-requisitos:

- Node.js (recomendado 18+)
- npm (ou yarn/pnpm)

Passos:

1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd cinviva
```

2. Instale as dependências

```bash
npm install
```

3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O Vite iniciará um servidor local (por padrão em http://localhost:5173). O terminal mostrará a URL exata.

4. Build para produção

```bash
npm run build
```

5. Pré-visualizar o build (opcional)

```bash
npm run preview
```

## Scripts úteis (conforme `package.json`)

- `npm run dev` — servidor de desenvolvimento com HMR
- `npm run build` — gera os arquivos de produção
- `npm run preview` — serve o bundle de produção localmente
- `npm run lint` — executa ESLint

## Estrutura (resumida)

- `src/` — código fonte React
	- `components/` — componentes reutilizáveis (ícones, cards, etc.)
	- `pages/` — páginas da aplicação (ex.: `MainPage.jsx`, `Mercado.jsx`)
	- `assets/` — imagens e fontes

## Contato

Para dúvidas sobre o projeto ou conteúdo, use as issues do GitHub ou entre em contato com o time responsável (incluir contatos internos, se houver).

---

README gerado/atualizado automaticamente para fornecer contexto e instruções de desenvolvimento do projeto CONVIVA.
