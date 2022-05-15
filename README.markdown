&#xa0;

<h1 align="center">NLW-08 Return - Server API</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/andrelinos/NLW8.0-Server?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/andrelinos/NLW8.0-Server?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/andrelinos/NLW8.0-Server?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/andrelinos/NLW8.0-Server?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/andrelinos/NLW8.0-Server?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/andrelinos/NLW8.0-Server?color=56BEB8" />

   <img alt="Github stars" src="https://img.shields.io/github/stars/andrelinos/NLW8.0-Server?color=56BEB8" />
</p>

<hr>

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#sparkles-funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requisitos">Requisistos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-iniciando">Iniciando</a> &#xa0; | &#xa0;
  <a href="#memo-licen%C3%A7a">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/andrelinos" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

Aplicação desenvolvida na NLW Return apresentada no mês de maio de 2022 com trilhas Impulse e Origin com aplicações distintas, esta é apenas o backend da aplicação impulse. A aplicação web poderá ser [acessada aqui](https://github.com/andrelinos/NLW8.0-web).

## :sparkles: Funcionalidades ##

:heavy_check_mark: Envio de comentários para o mailtrap\
:heavy_check_mark: Salva em banco de dados\
:heavy_check_mark: Testes de funcionalidades

## :rocket: Tecnologias ##

Confira abaixo as tecnologias utilizadas:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Express](http://expressjs.com/)
- [ts-node](https://typestrong.org/ts-node/)
- [Nodemailer](https://nodemailer.com/)
- [Jest](https://jestjs.io/)
- [Jest](https://jestjs.io/)

## :white_check_mark: Requisitos ##

Antes de iniciar, :checkered_flag: você precisa ter instalado o
o[Git](https://git-scm.com) e o [Node](https://nodejs.org/en/).

## :checkered_flag: Iniciando ##

```bash
# Clone o projeto
$ git clone https://github.com/andrelinos/NLW8.0-Server

# Acesse
$ cd server

# Instale as dependências 
$ yarn

# Execute o projeto
$ yarn start

# Assim que terminar, rode o comando abaixo para criar as migrations do banco de dados
$ yarn prisma migrate dev

# Nota: Caso não esteja usando o yarn, pode usar o npx mesmo 

# O server HTTP estará disponível em <http://localhost:3000>
```

## Alguns detalhes importantes

- É necessário acessar o site do mailtraip.io, criar sua conta e seguir os passos abaixo para que funcione corretamente:
    - - Assim que criar, fizer o login, acesse a guia **Inboxes**;
    - - Clique em Add **Inbox**, Informe um nome qualquer e clique em **Save**;
    - - Agora acesse as configurações de sua Inbox, e escolha em Integrations a opção **Node.js > Nodemailer**
    - - Então terá algo como está no arquivo ``.env.example`` em anexo neste repositório;
    - - Basta substituir as informações do arquivo ``.env.examplo`` e depois renomeio para ``.env``;
- Após esta configuração, sua api já irá funcionar esta parte do envio de e-mails.

-

## :memo: Licença ##

Este projeto está sob licença MIT. Para maiores detalhes, veja o arquivo [LICENSE](LICENSE.md).

Feito com :heart: por <a href="https://github.com/andrelinos" target="_blank">Andrelino Silva</a>

&#xa0;

<a href="#top">Voltar ao top</a>
