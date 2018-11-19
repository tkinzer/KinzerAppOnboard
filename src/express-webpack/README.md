

npm init -y;
npm install --save express;

#package.json
"scripts": {
  "start": "node ./server.js"
},

npm install --save-dev webpack webpack-cli webpack-node-externals
npm install --save-dev babel-core babel-loader babel-preset-env

We’re also going to need to install html-loader and html-webpack-plugin to copy our index.html file to the dist directory. This plugin will also insert a script tag in the HTML file that imports the main Javascript file.

npm install html-loader html-webpack-plugin --save-dev

Note that excludeChunks will exclude a file called server which we don’t want to be included into our HTML file, since that is the webserver, and not needed in the app itself.

Change server.js to have ES6+ import syntax instead of Node’s require to test that Babel transpilation is happening correctly.

*** Change Babel-loader ^8 to ^7

### ADD CSS and JS to App

npm install --save-dev css-loader file-loader style-loader url-loader

npm install --save-dev mini-css-extract-plugin uglifyjs-webpack-plugin optimize-css-assets-webpack-plugin

###Step 5: Add Webpack Dev Middleware

npm install --save-dev webpack-dev-middleware

### HOT Module reloading

npm install --save-dev webpack-hot-middleware

###Add EsLinting

npm install --save-dev eslint-plugin-react eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-import

### JEST Unit Testing and Coverage

npm install --save-dev jest

