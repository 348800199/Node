// 1.引入http
var http=require('http');
http.createServer(function (req,res) {
    res.writeHead(200, { "Content-Type":"text/html;charset=utf-8"})
    res.write("你好，node.js");
    res.end();
}).listen(8001)