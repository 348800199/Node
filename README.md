
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