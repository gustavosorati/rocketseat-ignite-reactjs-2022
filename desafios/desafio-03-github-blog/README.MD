# Desafio 03 Ignite React 2022 - Github Blog

![Capa Github Explorer](/public/capa.jpg)

O Projeto busca as issues de um repositório do github de um usuário e as exibe como se fosse um blog.

Esse projeto é faz parte dos desafios propostos no curso da Rocketseat Ignite ReactJS 2022.

## 🔧 Instalação

Antes de executar o projeto, será necessário que você tenha instalado o **NodeJS**, caso não tenha pode baixa-lo [aqui](https://nodejs.org/en/download/).

Após isso a primeira coisa a se fazer, será criar um repositório no github com alguns issues dentro dele, esses issues serão as postagens do blog.

Na raiz do projeto criar um arquivo `.env` com as seguintes variáveis:

    VITE_GIT_USERNAME=
    VITE_GIT_REPONAME=

Em `USERNAME` deve ser colocado seu nick do github, e em `REPONAME`, o repositório aonde as issues foram criadas, após esses passos rodar `yarn dev` para que o projeto execute.

🛠️ Construído com

- React
- Typescript
- Styled-Components
- Vite
- Axios
- React Hook Form e Zod