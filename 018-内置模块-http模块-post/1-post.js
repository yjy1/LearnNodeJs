var http = require('http')
var https = require('https')
var url = require('url')

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
            //  客户端 去小米有品要数据
            // httpget(res)
            httppost((data)=>{
                res.end(data)
            })
            break;
        default:
            res.end('404')
            break;
    } 
}).listen(3001)

function httppost(cb){
    var data = ""
    var option = {
        hostname:"m.xiaomiyoupin.com",
        port:"443",
        path:"/mtop/market/search/placeHolder",
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }
    }
    var req =  https.request(option,(res)=>{
        res.on("data",chunk=>{
            data += chunk
        })
        res.on("end",()=>{
            cb(data)
        })
    })
    //reg.write("name=kerwin&age=100”)
    req.write(JSON.stringify([{},{"baseParam":{"ypClient":1}}]) )
    req.end()
}