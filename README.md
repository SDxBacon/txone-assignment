# TXOne FED Frontend Assignment
![Aug-21-2023 15-01-45](https://github.com/SDxBacon/txone-fed-frontend-assignment/assets/10906745/f6fccc44-fd18-4c89-90db-c21c4ec3eaa5)

## Installation
```bash
# using npm
npm install

# or yarn
yarn install
```

## Start Development server
```bash
yarn start
```
webpack-dev-server 會將伺服器服務在 `:8080` 上（http://localhost:8080/）

## Build Production
```bash
yarn build # 打包好的bundle會被放在 /dist 下

# 或著也可以打包同時serve production server
yarn serve # 此 script 會執行 yarn build && serve ./dist，伺服器會服務於本機端 port: 3000 上
```

## Run test
```bash
yarn test
```
<img width="650" alt="截圖 2023-08-21 下午2 50 57" src="https://github.com/SDxBacon/txone-fed-frontend-assignment/assets/10906745/ea3905dc-847a-4500-a15a-909f7a1b1609">
