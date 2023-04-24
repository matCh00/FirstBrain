# FirstBrain
React + TypeScript + Ionic

### [matCh00.github.io/FirstBrain](https://match00.github.io/FirstBrain/)

--------------------------

## Init

+ npm install -g @ionic/cli
+ ionic start
+ cd appName
+ ionic serve


<br>

--------------------------

## Github Pages

 Code
  + `package.json` 
    + "homepage": "https://match00.github.io/FirstBrain/",
  + npm install --save gh-pages
  + `package.json -> scripts` 
    + "predeploy": "npm run build",
    + "deploy": "gh-pages -d dist",
  + npm run predeploy
  + npm run deploy

 GitHub
  + Pages
    + `branch`  gh-pages
