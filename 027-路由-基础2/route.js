const fs = require('fs')

function render(res,path,statusCode){
    res.writeHead(statusCode,{"Content-Type":"text/html;charset=utf-8"})
    res.write(fs.readFileSync(path),'utf-8')
    res.end()
}
 
const route = {
    '/login':(res)=>{
        render(res,'./static/login.html',200)
        // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        // res.write(fs.readFileSync('./static/login.html'),'utf-8')
    },
    '/home':(res)=>{
        render(res,'./static/home.html',200)
        // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        // res.write(fs.readFileSync('./static/home.html'),'utf-8')
    },
    '/404':(res)=>{
        render(res,'./static/404.html',404)
        // res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"})
        // res.write(fs.readFileSync('./static/404.html'),'utf-8')
    }
}

module.exports  = route