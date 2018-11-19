mkdir webpack-react-tutorial && cd webpack-react-tutorial

mkdir -p src

npm init -y

npm i webpack --save-dev

npm i webpack-cli --save-dev

#now edit the package.json to add a build command to the scripts

"build": "webpack --mode production"

#by adding build webpack command we no longer need a config file for webpack since v4

###BABEL
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

#.babelrc in project root
touch .babelrc && nano .babelrc

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

###REACT

npm i react react-dom --save-dev

mkdir -p src/js/components/{container,presentational}

touch src/js/components/container/FormContainer.js

npm i prop-types --save-dev
