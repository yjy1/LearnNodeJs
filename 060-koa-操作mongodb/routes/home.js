const Router = require('koa-router')
const router = new Router()


// 增加
router.get('/', async (ctx, next) => {
    // (method) ExtendableContext.render(viewPath: string, locals?: any): Promise<void>
    // 获取cookie
    console.log(ctx.cookies.get('name'))
    // 设置cookie
    ctx.cookies.set('location','guangzhou')
    await ctx.render('home', { username: 'ycj' }) // 自动找views/home.ejs
})


router.get('/list',async ctx=>{
    ctx.body = [
        { _id: 1, username: 'ycj', age: 26 },
        { _id: 2, username: 'ycj2', age: 27 },
        { _id: 3, username: 'ycj3', age: 28 },
    ]
})
module.exports = router