//1.导入fs模块
const { log } = require('console');
const fs = require('fs');

let ws = fs.createWriteStream('观书有感.txt');
ws.write('1111\n');
ws.write('2222\n');
ws.write('3333\n');
ws.write('4444\n');

ws.end();