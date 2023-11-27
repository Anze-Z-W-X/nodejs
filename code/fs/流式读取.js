const fs = require('fs');

const rs = fs.createReadStream('观书有感.txt');

rs.on('data',chunk=>{
    console.log(chunk.toString());
});

rs.on('end',()=>{
    console.log('读取完毕');
});