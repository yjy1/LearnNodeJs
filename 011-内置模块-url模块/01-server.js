let moduleRenderHtml = require('./module/renderHtml')
let moduleRenderStatus = require('./module/renderStatus')

var http = require('http')
var url = require('url')
var server = http.createServer()
server.on('request',(req,res)=>{
    if(req.url==="/favicon.ico"){
        // todo 读取本地图标
        return
    }
    var urlObject = url.parse(req.url,true)
    console.log(urlObject.query.name,urlObject.query.age)
    var pathname = url.parse(req.url).pathname
    console.log(pathname,'11111111')
    res.writeHead(moduleRenderStatus.renderStatus(pathname),{"Content-Type":"text/html;charset=utf-8"})
    res.write(moduleRenderHtml.renderHtml(pathname))
    res.end()
})
server.listen(3000,()=>{
    console.log('server start')
}) 

const urlString= "https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110"
const parsedStr = url.parse(urlString)
console.log(parsedStr)

//
const urlObject = {
    protocol: 'https',
    sTashes: true ,
    auth: null,
    host: 'www.baidu.com:443',
    port:'443',
    hostname : 'www.baidu.com',
    hash:'#tag=110',
    search: '?id=8&name=mouse',
    query: { id:'8', name: 'mouse' },
    pathname:'/ad/index.htm1',
    path: '/ad/index.htm1?id=8&name=mouse'
}
const parsedObj = url.format(urlObject)
console.log(parsedObj)

// var a = url.resolve('/one/two/three','four')
var a = url.resolve('/one/two/three/','four')
console.log(a)
// var b = url.resolve('http://example.com/','/one' )
var b = url.resolve('http://example.com/aaa/bbb','/one' )
console.log(b)