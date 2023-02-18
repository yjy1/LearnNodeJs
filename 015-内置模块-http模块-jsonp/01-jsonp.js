var http = require('http')
var url = require('url')
http.createServer((req,res)=>{
    var urlobj = url.parse(req.url,true)
    console.log(urlobj.query.callback)
    switch (urlobj.pathname) {
        case '/api/aaa':
            res.end(`${urlobj.query.callback}(${(JSON.stringify({
                name: 'ycj',
                age: 26
            }))})`)
            break;
        default:
            res.end('404')
            break;
    }
    // res.end(JSON.stringify({
    //     name:'ycj',
    //     age:26
    // }))
}).listen(3001 )