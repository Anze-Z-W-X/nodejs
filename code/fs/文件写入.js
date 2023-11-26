// 新建一个文件，座右铭.txt，写入内容：三人行，必有我师焉
//1.导入fs模块
const { log } = require('console');
const fs = require('fs');

//2.写入文件,第三个表示追加写入
fs.writeFile('./座右铭.txt','三人行，必有我师焉3',/*{flag:'a'},*/err=>{
    //err，写入失败就是一个错误对象，成功为null
    if(err){
        console.log('写入失败');
        return;
    }
    else{
        console.log('写入成功');
    }
});