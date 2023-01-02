First initialize the project and install express, config, dotenv and nodemon
npm init -y
npm i express nodemon dotenv nodemon

Then install some dev dependency
npm i --save-dev typescript ts-node-dev

Then install the node type
npm i -D @types/node @types/express

then tsc --init for initialize tsconfig
set the target value and make other change if necessary

create the src folder and create add type module in packet.json

write dev script in package.json
"dev": "ts-node-dev --respawn --transpile-only src/app.ts",

write the build script
tsc -p .

write the start script 
cross-env NODE_PATH=dist/ node ./dist/src/app.js

install the dotenv and crossenv file to use env
npm i dotenv cross-env