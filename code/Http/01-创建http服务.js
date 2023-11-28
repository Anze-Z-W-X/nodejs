const http = require('http');

const server = http.createServer((request,response)=>{
    response.end('hello httpServer');
});

//监听端口
server.listen(9000,()=>{
    console.log('服务已经启动');
});