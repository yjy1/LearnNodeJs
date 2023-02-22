
const Koa = require('koa')

const app = Koa()

app.use((ctx,next)=>{
    if(ctx.url === '/favicon.ico') return
    console.log(1111111)
    next()

    console.log(333333333)
    ctx.body = 'hello world'
})

app.use((ctx,next)=>{
    console.log(222222222)
})

app.listen(3001)