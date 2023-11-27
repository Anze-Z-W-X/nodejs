const fs = require('fs');

//unlinkSync:同步删除,rm与unlink参数效果一样
fs.unlink('a.txt',err =>{
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})