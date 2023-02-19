const fs = require('fs')

fs.appendFile('./avatar/a.text','世界',(err)=>{
    console.log(err)
})