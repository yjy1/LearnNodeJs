const fs = require('fs')

fs.rmdir('./avatar2',(err)=>{
    console.log(err)
    if (err && err.code == 'ENOENT'){
        console.log('文件夹不存在')
    }
})