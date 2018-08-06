var http = require('http');
var url = require('url')

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
    if(req.url!='/favicon.ico'){
        let result = url.parse(req.url, true)
        console.log(result.query,123)  //第一个参数位url，第二true 返回位对象格式   .query 得到参数
    }
    
    res.end();
}).listen(8001)


