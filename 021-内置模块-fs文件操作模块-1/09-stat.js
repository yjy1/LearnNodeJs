const fs = require('fs')

fs.stat('./avatar/a.text',(err,stats)=>{
    if(!err){
        console.log(stats.isFile())
        console.log(stats.isDirectory())

    }
})