const fs  = require('fs')

fs.writeFile('./avatar/a.text','你好',(err)=>{
    console.log(err)
})