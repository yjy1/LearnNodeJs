const fs = require('fs')
fs.mkdir("./avatar",(err)=>{
    console.log(err)
    if (err && err.code == 'EEXIST'){
        console.log('文件夹已存在')
    }
})