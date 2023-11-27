//文件的重命名
const fs = require('fs');

// fs.rename('座右铭.txt','论语.txt',err =>{
//     if(err){
//         console.log('操作失败');
//         return;
//     }
//     console.log('操作成功');
// });


//文件的移动
fs.rename('观书有感.txt','../资料/data.txt',err =>{
    if(err){
        console.log('操作失败');
        return;
    }
    console.log('操作成功');
});