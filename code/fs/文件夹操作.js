const fs = require('fs');

// fs.mkdir('./html',err =>{
//     if(err){
//         console.log('操作失败');
//         return;
//     }
//     console.log('操作成功');
// });

// fs.mkdir('./a/b/c',{recursive:true},err =>{
//     if(err){
//         console.log('操作失败');
//         return;
//     }
//     console.log('操作成功');
// })

//读取文件夹
// fs.readdir('./',(err,data) =>{
//     if(err){
//         console.log('操作失败');
//         return;
//     }
//     console.log(data);
// })

//删除文件夹
//不推荐使用
// fs.rmdir('./a',{recursive:true},err =>{
//     if(err){
//         console.log('操作失败');
//         return;
//     }
//     console.log('操作成功');
// });

//建议使用
// fs.rm('./a',err =>{
//     if(err){
//         console.log('操作失败');
//         return;
//     }
//     console.log('操作成功');
// });