const EventEmitter = require('events')
var http = require('http')
var https = require('https')
var url = require('url')
var event = null

http.createServer((req,res)=>{
    var urlobj = url.parse(req.url,true)
    // console.log(urlobj.query.callback)
    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        // cros头
        "access-control-allow-origin":"*"
    })
    switch (urlobj.pathname) {
        case '/api/aaa':
            //  客户端 去猫眼要数据
            // httpget(res)
            event = new EventEmitter()
            event.on("play",(data)=>{
                console.log('---play---',1111)
                res.end(data)
            })
            httpget( )
            break;
        default:
            res.end('404')
            break;
    } 
}).listen(3000)

function httpget(cb){
    var data = ""
    https.get("https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4",(res)=>{
        res.on("data",(chunk)=>{
            data += chunk
        })

        res.on("end",()=>{
            console.log(data)
            event.emit("play",data)
            // cb(data) //将数据传给回调函数
            // response.end( data)
        })
    })
}