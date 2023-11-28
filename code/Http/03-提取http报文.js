const http = require('http');

const server = http.createServer((request,response)=>{
    //编码
    response.setHeader('content-type','text/html;charset=utf-8');
    //获取请求方法
    console.log(request.method);
    //获取请求路径
    console.log(request.url);
    //获取http版本号
    console.log(request.httpVersion);
    //获取请求头
    console.log(request.headers);

    
    response.end('你好');   //设置响应体
});

//监听端口
server.listen(9000,()=>{
    console.log('服务已经启动');
});