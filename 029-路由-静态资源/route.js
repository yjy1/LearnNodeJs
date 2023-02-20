const fs = require('fs')
const path = require('path')
const mime = require('mime')

function render(res,path,statusCode,type=""){
    res.writeHead(statusCode, { "Content-Type": `${type ? type : "text/html"};charset=utf-8` })
    res.write(fs.readFileSync(path),'utf-8')
    res.end()
}
 
const route = {
    '/login':(req,res)=>{
        render(res,'./static/login.html',200)
    },
    '/home':(req,res)=>{
        render(res,'./static/home.html',200)
    },
    '/404':(req,res)=>{
        if(readStaticFile(req,res)){
            return
        }
        render(res,'./static/404.html',404)
    }
}

// 静态资源管理
function readStaticFile(req,res){
    // 获取路径
    const myURL = new URL(req.url,'http://127.0.0.1:3000')
    const pathname = path.join(__dirname,'/static',myURL.pathname) 
    if(pathname === '/') return false
    if(fs.existsSync(pathname)){
        render(res, pathname, 200, mime.getType(myURL.pathname.split('.')[1]))
        return true
    }else{
        return false
    }
}

module.exports  = route