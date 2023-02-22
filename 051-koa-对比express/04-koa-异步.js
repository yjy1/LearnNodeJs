
const Koa = require('koa')

const app =new Koa()

app.use(async(ctx,next)=>{
    if(ctx.url === '/favicon.ico') return
    console.log(1111111)
    var mytoken = await next()

    console.log(44444444,mytoken)
    ctx.body = 'hello world'
})

app.use(async(ctx,next)=>{
    console.log(222222222)

    // 异步
    await delay(1000)
    return ctx.token = 'ewruoiwer78687342'
    console.log(33333333)
})

function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout( resolve, time);
    })
}

app.listen(3001)