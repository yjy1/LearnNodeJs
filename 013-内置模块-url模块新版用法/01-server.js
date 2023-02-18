let moduleRenderHtml = require('./module/renderHtml')
let moduleRenderStatus = require('./module/renderStatus')

var http = require('http')
var url = require('url')
const {fileURLToPath,urlToHttpOptions} = require('url')

var server = http.createServer()
server.on('request',(req,res)=>{
    if(req.url==="/favicon.ico"){
        // todo 读取本地图标
        return
    }
    // var urlObject = url.parse(req.url,true)
    // console.log(urlObject.query.name,urlObject.query.age)
    // var pathname = url.parse(req.url).pathname
    // console.log(pathname,'11111111')

    const myURL = new URL(req.url,'http://127.0.0.1:3000/');
    console.log('---myURL---',myURL.searchParams.get('a'))
    const pathname = myURL.pathname
    for(var [key,value] of myURL.searchParams){
        console.log(key,value)
    }

    res.writeHead(moduleRenderStatus.renderStatus(pathname),{"Content-Type":"text/html;charset=utf-8"})
    res.write(moduleRenderHtml.renderHtml(pathname))
    res.end()
})
server.listen(3000,()=>{
    console.log('server start')
}) 
 
var b = new URL('/one','http://example.com/aaa/bbb' )
console.log('--b--',b.href)

const myURL = new URL('https://a:b@测?abc#foo');
console.log(url.format(myURL, { unicode: true, auth: false, fragment: false, search: false }))
// console.log(url.format(myURL, {
//     fragment: false, unicode: true,
//     auth: false
// }));


console.log(new URL('file://c://你好.txt').pathname);  // 错误: /%E4%BD%A0%E5%A5%BD.txt
console.log(fileURLToPath('file://c:/你好.txt')) ; // 正确: /你好.txt (POSIX) 


const myURL2 = new URL('https://a:b@测?abc#foo');
console.log(myURL2)
console.log('---myURL2---',urlToHttpOptions(myURL2));