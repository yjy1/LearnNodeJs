var http = require('http')
var https = require('https')
var url = require('url')
var cheerio = require('cheerio')

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
            httpget((data)=>{
                res.end(spider(data))
            })
            break;
        default:
            res.end('404')
            break;
    } 
}).listen(3001)

function httpget(cb){
    var data = ""
    https.get("https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4",(res)=>{
        res.on("data",(chunk)=>{
            data += chunk
        })

        res.on("end",()=>{
            console.log(data)
            cb(data) //将数据传给回调函数
            // response.end( data)
        })
    })
}

function spider(data){
    // npm i cheerio
    let $ = cheerio.load(data)

    let $movielist = $(".column.content")
    // console.log($movielist)
    let movies = []
    $movielist.each((index,value)=>{
        movies.push({
           title: $(value).find(".title").text(),
           grade: $(value).find(".grade").text(),
           actor: $(value).find(".actor").text(),

        })
    })
    console.log(movies)
    return JSON.stringify( movies) 
}