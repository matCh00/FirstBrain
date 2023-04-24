# FirstBrain
React + TypeScript + Ionic

### [matCh00.github.io/FirstBrain](https://match00.github.io/FirstBrain/)

--------------------------

## App

Ionic
  + `npm install -g @ionic/cli`
  + `ionic start`
  + `cd appName`
  + `ionic serve`

## Docs

+ [ionic](https://ionicframework.com/docs/)


--------------------------

## Github Pages

config
  + _package.json_
    + "homepage": "https://match00.github.io/FirstBrain/",
  + `npm install --save gh-pages`
  + _package.json_ ➜ scripts
    + "predeploy": "npm run build",
    + "deploy": "gh-pages -d dist",
  + `npm run predeploy`
  + `npm run deploy`

 GitHub
  + Pages
    + _branch_ gh-pages
