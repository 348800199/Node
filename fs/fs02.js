
    // 1.判断服务器上面有没有upload目录。没有创建这个目录。   （图片上传）

//要用fs目录必须得引入fs

var fs = require('fs');

// fs.stat('upload',function(err,stats){

//        if(err){  /*没有这个目录*/
//            fs.mkdir('upload',function(error){
//                if(error){

//                    console.log(error);
//                    return false;
//                }
//                console.log('创建成功');
//            })
//        }else{
//            console.log('目录已经存在');
//            console.log(stats.isDirectory());
//        }

// })


//2. 找出html目录下面的所有的目录，然后打印出来

//错误写法
//fs.readdir('html',function(err,files){
//             if(err){
//                    console.log(error);
//
//             }else{  /*判断是目录还是文件夹*/
//                 console.log(files);  /*数组*/
//
//                 for(var i=0;i<files.length;i++){
//
//                     console.log(files[i]);
//                     fs.stat(files[i],function(error,stats){  /*循环判断是目录还是文件  ---异步 错误写法*/
//
//                            console.log(files[i]);
//                     })
//                 }
//
//             }
//
//
//})
//



    (function getFile(i) {
        if(i==4)return;
        setTimeout(() => {
            console.log(i)
        }, 200);
        getFile(i+1)
        
    }(0))

