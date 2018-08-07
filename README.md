
1.url模块
url.parse("http://www.baidu.com/new?name=zhangsan&age=20", true)

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: null,
//     search: '?name=zhangsan&age=20',
//     query: { name: 'zhangsan', age: '20' },
//     pathname: '/new',
//     path: '/new?name=zhangsan&age=20',
//     href: 'http://www.baidu.com/new?name=zhangsan&age=20'
// }

url.format('') // 与url.parse相反
url.resolve('www.baidu.com/two/one','New') // www.baidu.com/two/New    只在最后/ 替换

3.supervisor  // 解决改过服务器需要重启才会生效
npm  install -g supervisor
错误点： 需要得到管理员权限，才能安装supervisor;
之后运行就  supervisor server.js

4.module.exports 与 exports 区别
    exports是module.exports的引用。你的模块最终返回module.exports给调用者，而不是exports。
    Node.js 在初始化时就执行了一句 exports = module.exports , 所以 exports 指向了 module.exports 相同的内存, 之后你若改变 module.exports 所指向的內存 , 你必須重新再执行一句 exports = module.exports , 才能指向正确的实例, 之后再赋值才有效.

5. let http=require("http")
    http默认的目录下没有的话，node.js 会默认在node_modules的目录下找，文件后缀也可以省略
6. let utils = require('utils'); //utils使用packages可以直接等于index.js
    npm init --yes
    使用 package.json 配置找寻下面的 index.js

7.npm 安装
    注意：以后安装模块的时候我们要把这个模块写入到package.json这个配置文件
    npm install md5-node --save       写入到package.json 里面的  dependencies
    npm install md5-node --save-dev   写入到package.json 里面的  devDependencies
8.版本号
    "dependencies": {
    "ejs": "^2.3.4",
    "express": "^4.13.3",
    "formidable": "^1.0.17"
    }
    ^表示第一位版本号不变，后面两位取最新的
    ~表示前两位不变，最后一个取最新
    *表示全部取最新
9.fs模块
    /*
    1. fs.stat  检测是文件还是目录
    2. fs.mkdir  创建目录
    3. fs.writeFile  创建写入文件
    4. fs.appendFile 追加文件
    5.fs.readFile 读取文件
    6.fs.readdir读取目录
    7.fs.rename 重命名
    8. fs.rmdir  删除目录
    9. fs.unlink删除文件
    */