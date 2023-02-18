let moduleRenderHtml = require('./module/renderHtml')
let moduleRenderStatus = require('./module/renderStatus')
console.log(moduleRenderHtml.renderHtml)
var http = require('http')
var server = http.createServer()
server.on('request',(req,res)=>{
    if(req.url==="/favicon.ico"){
        // todo 读取本地图标
        return
    }
    res.writeHead(moduleRenderStatus.renderStatus(req.url),{"Content-Type":"text/html;charset=utf-8"})
    res.write(moduleRenderHtml.renderHtml(req.url))
    res.end()
})
server.listen(3000,()=>{
    console.log('server start')
})
// 创建服务器
/* http.createServer((req,res)=>{
    // req 接收浏览器传递参数 
    // res 返回渲染的内容

    // res.write('hello world11')
    // res.write('hello world22')

    console.log(req.url)
    if(req.url==="/favicon.ico"){
        // todo 读取本地图标
        return
    }
        
    res.writeHead(moduleRenderStatus.renderStatus(req.url),{"Content-Type":"text/html;charset=utf-8"})
    res.write(moduleRenderHtml.renderHtml(req.url))
    res.end()
}).listen(3000,()=>{
    console.log('server start')
})
 */