function render(res, data, statusCode) {
    res.writeHead(statusCode, { "Content-Type": "text/html;charset=utf-8" })
    res.write(data)
    res.end()
}
const apiRouter = {
    '/api/login': (req, res) => {
        // 获取参数
        const myURL = new URL(req.url, "http://127.0.0.1")

        if (myURL.searchParams.get('username') === 'ycj' && myURL.searchParams.get('password') === '123') {
            render(res, `{"ok":1}`, 200)
        } else {
            render(res, `{"ok":0}`, 200)
        }
    },
    '/api/loginpost': (req, res) => {
        // 获取参数
        var post = ''
        req.on('data', chunk => {
            post += chunk
        })

        req.on('end', () => {
            console.log(post)
            post = JSON.parse(post)
            if (post.username === 'ycj' && post.password === '123') {
                console.log('=======')
                render(res, `{"ok":1}`, 200)
            } else {
                render(res, `{"ok":0}`, 200)
            }
        })
    }
}

module.exports = apiRouter