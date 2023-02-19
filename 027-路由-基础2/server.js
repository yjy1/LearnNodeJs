const http = require('http')
 
const Router = {}
 
function use(obj){
    Object.assign(Router,obj)
}

function start(){
    http.createServer((req,res)=>{
        const myURL = new URL(req.url,'http://127.0.0.1')
        console.log(myURL.pathname)
        // route(myURL.pathname,res)
        Router[myURL.pathname](res)
    
        res.end()
    }).listen(3000,()=>{
        console.log('server start')
    })
}

exports.start = start
exports.use = use