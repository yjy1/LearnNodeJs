function render(res,data,statusCode){
    res.writeHead(statusCode,{"Content-Type":"text/html;charset=utf-8"})
    res.write(data)
    res.end()
}
const apiRouter = {
    '/api/login':(res)=>{
        render(res,`{ok:1}`,200)
    }
}

module.exports = apiRouter