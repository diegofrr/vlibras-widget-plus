<div align="center">

![image](https://i.postimg.cc/brFDMqWk/vlibras-widget-plus.png)

Promovendo uma navegação mais acessível.

![Version](https://img.shields.io/badge/version-0.2.0_alpha.6-blue)

</div>

## 📌 Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Iniciando](#iniciando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Rodando a aplicação](#rodando-a-aplicação)
- [Build](#build)
- [Versionamento](#versionamento)
- [Contribuidores](#contribuidores)

<h2 id="sobre-o-projeto">📝 Sobre o projeto</h2>

O **VLibras Widget+** é uma ferramenta desenvolvida para melhorar a acessibilidade em sites, oferecendo uma experiência mais inclusiva para usuários com diferentes necessidades. Com um conjunto de funcionalidades voltadas para personalização de texto, leitura, foco, contraste e redução de distrações, o **VLibras Widget+** possibilita que cada usuário adapte o conteúdo conforme suas preferências e dificuldades.

Seja ajustando o tamanho da fonte, ouvindo o texto em áudio, aumentando o contraste ou reduzindo elementos visuais que possam causar distração, a ferramenta promove maior autonomia e conforto na navegação.

<h2 id="tecnologias">💻 Tecnologias</h2>

- **Vite** - Ferramenta moderna e rápida para construção de aplicações frontend;
- **Preact** - Biblioteca JavaScript leve e eficiente para criação de interfaces reativas;
- **Tailwind CSS** - Framework CSS utilitário para desenvolvimento ágil de interfaces.
- **Zustand** - Biblioteca para gerenciamento de estados da aplicação;
- **Biome** - Ferramenta rápida para formatação, linting e análise de código;
- **Husky** - Ferramenta para configurar hooks do Git e garantir verificações de qualidade antes dos commits;
- **Commitlint** - Linter para garantir que as mensagens de commit sigam um formato convencional;
- **release-it** - Automação do processo de versionamento, incluindo geração de tags, commits e changelogs.

<h2 id="iniciando">🚀 Iniciando</h2>

### Pré-requisitos

Cerifique-se de ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão v20 ou maior)

### Instalação

1. **Faça o clone do repositório**:

   ```bash
   git clone https://gitlab.lavid.ufpb.br/diego/vlibras-widget-plus
   cd vlibras-widget-plus
   ```

2. **Instale as dependências**:

   ```bash
   pnpm install
   ```

### Rodando a aplicação

```bash
pnpm dev
```

A aplicação estará acessível em: `http://localhost:3003`.

<h2 id="build">📦 Build</h2>

> Antes de tudo, certifique-se que o link para a build de produção no arquivo `/src/scripts/vlibras-widget-plus.js` está correto.

---

Para gerar a versão final do projeto, execute:

```bash
pnpm build
```

Isso criará a pasta `/dist` na raiz do projeto.

<h2 id="versionamento">🏷️ Versionamento</h2>

Antes de tudo, faça o _fetch_ das _tags_ de versões do projeto:

```bash
git fetch --tags
```

Depois, execute:

```bash
pnpm release
```

O comando atualiza automaticamente o arquivo `CHANGELOG.md`, incrementa a versão no `package.json` e atualiza a variável **"VITE_APP_VERSION"** em `.env` (necessária para que o Vite forneça a versão para a aplicação).

> Este comando também pergunta se você desejar criar a _tag_ da nova versão. Caso aceite, ao ser criada, deve ser feito o _push_ dela (a criação da _tag_ também pode ser feita pelo GitLab).

<h2 id="contribuidores">🤝 Contribuidores</h2>

- **Diêgo Ferreira** - [diego.raian@lavid.ufpb.br](mailto:diego.raian@lavid.ufpb.br)
