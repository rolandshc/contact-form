# contact-form

A implementation using react, typescript with webpack and babel.
Polishing with [Materail UI](https://material-ui.com/)


Node Module size: 262MB

build size after bundled: 3.92MB



## Demo
At the Demo folder in the repo.

bundled by webpack.

Open the index.html and go!


### Requirement: 
node, npm from https://nodejs.org/en/

Space requirement: 268MB

### how to install ?
1) download the source and unzip
2) open terminal goto source folder directory
3) type "npm install" and run

### how to run locally?
1) type "npm run-script webpack-start"
2) the webpage should start at http://localhost:4000/ on your default browser

### how to build?
1) type "npm run-script build"
2) the build will be in the "dist" folder inside the project root folder.

### how to change output folder destination?
goto src/webpack.config.js, change the parameter of the 'path' in 'output'
```json
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
```
