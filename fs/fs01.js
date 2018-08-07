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
let fs = require("fs");

fs.stat('html',(err,stats) =>{
    if(err){
        console.log(err);
        return false
    }
    console.log('文件',stats.isFile()) //false
    console.log('目录', stats.isDirectory()) //true
})

// 创建文件
  //接收参数：
  //path            将创建的目录路径
  //mode          目录权限（读写权限），默认0777
  //callback      回调，传递异常参数err

// fs.mkdir('./css',(err) =>{
//     if (err) {
//         console.log(err);
//         return false
//     }
//     console.log("创建成功")
// })


//3. fs.writeFile  创建写入文件
//filename      (String)            文件名称
//data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
//options        (Object)           option数组对象，包含：
 //· encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
 //· mode         (Number)        文件读写权限，默认值 438
 //· flag            (String)            默认值 ‘w'
//callback {Function}  回调，传递一个异常参数err。
//直接覆盖

// fs.writeFile('inde.text', '你好,node.js','utf8',(err) =>{
//     if (err) {
//         console.log(err);
//         return false
//     }
//     console.log("文件创建成功")
// })

// 4.fs.appendFile 追加文件 用法一致和上面

// 5.fs.readFile 读取文件

// fs.readFile('inde.text',(err,data) =>{
//     if (err) {
//         console.log(err);
//         return false
//     }
//     console.log(data.toString()) //16转为10进制
// })

// 6.fs.readdir读取目录 用法一致和上面  会拿到文件夹下面所有目录

// 7.fs.rename 重命名 也可以重命名
fs.rename('html/css/basic.css','html/style.css',function(err){
    if(err){
     console.log(err);
     return false;
   }
   console.log('剪切成功');
})
