const Router = require('koa-router')
const router = new Router()


// 增加
router.get('/',async (ctx,next)=>{
    // (method) ExtendableContext.render(viewPath: string, locals?: any): Promise<void>
   await ctx.render('home',{username:'ycj'}) // 自动找views/home.ejs
}) 
module.exports = router