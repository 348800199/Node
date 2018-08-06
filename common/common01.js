var http=require("http");
var config = require("./config")
var app = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    console.log(config)
    res.write('你好，node.js');
    res.end();
})
app.listen(8002,'127.0.0.1')  // 第二参数限制访问地址