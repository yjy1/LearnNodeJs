var http = require('http')
var url = require('url')
http.createServer((req,res)=>{
    var urlobj = url.parse(req.url)
    switch (urlobj.pathname) {
        case '/api/aaa':
            res.end(`ycj(${(JSON.stringify({
                name: 'ycj',
                age: 26
            }))})`)
            break;
        default:
            res.end('404')
            break;
    } 
}).listen(5000)