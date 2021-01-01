
# Create Project - Express HTTP Server

```shell

mkdir graphql-server
cd ./graphql-server
npm init
touch index.js server.js

npm install babel-register@6.3.13 babel-preset-es2015@6.3.13 express@4.13.3 --save --save-exact

echo '{ "presets": ["es2015"] }' > .babelrc


sudo npm i -g nodemon
nodemon index.js

```

# We need to install some GraphQL libraries

```shell

npm install graphql@0.6.0 express-graphql@0.5.3 --save --save-exact

graphql: let us construct our schema, then expose API for resolving raw GraphQL document strings
express-graphql:
        + is meant to be used only with Express
        + handles ensuring that HTTP requests and responses are correctly formatted for GraphQL
        + eventually allows us to support GraphiQL with very little extra work

```
