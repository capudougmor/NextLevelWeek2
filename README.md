<h1 align="center">
    <img alt="Proffy" title="Proffy" src=".github/logo.svg" width="220px" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Como rodar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar-o-projeto">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-agradecimentos">Agradecimentos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
  
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/capudougmor/NextLevelWeek2">
</p>

<br>

<p align="center">
  <img alt="Proffy" src=".github/layout.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- Axios
- Node.js
- Typescript.js

## 💻 Projeto

**Proffy** - O Proffy é um projeto que visa conectar alunos e professores. Para que possam agendar horários e tirarem duvidas um com o outro.

## 🚀 Como rodar o projeto

Podemos considerar este projeto como sendo divido em três partes:

1. Back End (pasta server)
2. Front End (pasta web)

💡Para que o projeto consiga funcionar, precisa-se que o Back End esteja sendo executado.

## Clonando o projeto

Comece realizando um clone deste projeto, se preferir você também pode baixar como um .zip acessando o site do GitHub

```bash
# Clone este repositório
$ git clone https://github.com/capudougmor/NextLevelWeek2

# Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy
```

## Rodando o back end (servidor)

```bash
# Vá para a pasta da aplicação Front End
$ cd server

# Instale as dependências
$ npm install
# Ou use Yarn se preferir
$ yarn

# Rode as migrations do banco de dados
$ npm run knex:migrate
# Ou use Yarn
$ yarn knex:migrate

# Execute a aplicação em modo de desenvolvimento
$ npm run start
# Ou use Yarn se preferir
$ yarn start

# A aplicação será aberta na porta:3333
```

### Rodando a aplicação web (Front End)

```bash
# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install
# Ou use Yarn se preferir
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run start
# Ou use Yarn se preferir
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```
## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

## 🙌 Agradecimentos

#### Rocketseat :wave: [Faça parte dessa comunidade!](https://discordapp.com/invite/gCRAFhc)

---

Produzido por Douglas Mendes

<a href="https://www.linkedin.com/in/douglasmendesassuncao/">
  <img alt="Made by Douglas Mendes" src="https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white&link=www.linkedin.com/in/douglasmendesassuncao-dev/">
</a>

<a href="https://github.com/capudougmor/NextLevelWeek2" style="margin-left: 8px;">
  <img alt="Made by Douglas Mendes" src="https://img.shields.io/badge/-GitHub-grey?style=flat&logo=GitHub&logoColor=white&link=https://github.com/capudougmor/">
</a>
