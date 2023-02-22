
const Koa = require('koa')

const app = new Koa()
// ctx === context上下文
app.use((ctx,next)=>{

    console.log(ctx.request.path)
    // ctx.response.body = '<b>hello world</b>'
    // ctx.response.body = {name:'ycj'}

    ctx.body = 'hello world'
})

app.listen(3000)