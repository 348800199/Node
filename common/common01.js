var http=require("http");
var config = require("./config")
var tools = require("tools") // 默认在node_modules 下面找
var utils = require("utils") // 使用 package.json 配置找寻下面的 index.js
var app = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    console.log(config)
    console.log(tools)
    console.log(utils)
    res.write('你好，node.js');
    res.end();
})
app.listen(8002,'127.0.0.1')  // 第二参数限制访问地址