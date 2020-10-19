# Eko Developer Portal

Open-source developer portal for Eko. Read developer guides and API docs. Build with Eko! 

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Updates + Installs
Update docusaurus to most recent version

```
$ yarn upgrade docusaurus --latest
```
Install Redoc

```
$ npm install redoc --save-dev
```

Install peer dependencies required by ReDoc
```
$ npm i react react-dom mobx styled-components core-js
```

### Redocusaurus (Redoc + Docusaurus)

See this link: https://gist.github.com/rohit-gohri/b1a19f37702cfe4a6c5a47933a11785b to see how to import Redoc into a react component and pass in a yaml/json OpenAPI doc


