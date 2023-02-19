const http = require('http')
const route = require('./route.js')

http.createServer((req, res) => {

    const myURL = new URL(req.url, 'http://127.0.0.1')
    console.log(myURL.pathname)
    try {
        route[myURL.pathname](res)
    } catch (error) {
        route['/404'](res)
    }

    res.end()
}).listen(3000, () => {
    console.log('server start')
})
