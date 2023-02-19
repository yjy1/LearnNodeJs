const fs = require('fs')

fs.unlink('./avatar/a.text',(err)=>{
    console.log(err)
    if(err && err.code == "ENOENT")
        console.log('目录不存在')
    
})