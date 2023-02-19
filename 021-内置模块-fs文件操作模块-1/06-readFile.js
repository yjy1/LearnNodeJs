const fs = require('fs')

fs.readFile('./avatar/a.text',"utf-8",(err,data)=>{
    if (!err)
        console.log(data)
})