//1.导入fs模块
const { log } = require('console');
const fs = require('fs');

//2. 调用appendFile
fs.appendFile('座右铭.txt','\n则其善者而从之，其不善者而改之',err=>{
    //err，写入失败就是一个错误对象，成功为null
    if(err){
        console.log('写入失败');
        return;
    }
    else{
        console.log('写入成功');
    }
});