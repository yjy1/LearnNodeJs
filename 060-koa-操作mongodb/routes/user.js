const Router = require('koa-router')
const router = new Router()
const JWT = require('../util/JWT')
const multer = require('@koa/multer')
const upload = multer({dest:'public/uploads'})
const UserModel = require('../model/UserModel')

// 增加
router.post('/',(ctx,next)=>{
    console.log(ctx.request.body) //获取前端传来的参数
    // console.log(ctx.body)
    ctx.body = {
        ok:1,
        info:"add user success"
    }
}) 
.get('/',(ctx,next)=>{
    // 获取前端传来的参数
    console.log(ctx.query,ctx.querystring)
    ctx.body = ['aaa','bbb','ccc']
})
.put('/:id',(ctx,next)=>{
    console.log(ctx.params)
    ctx.body = {
        ok:1,
        info:"put user success"
    }
})
// delete
.del('/:id',(ctx,next)=>{
    ctx.body = {
        ok:1,
        info:"delete user success"
    }
})

router.post('/login',(ctx)=>{
    console.log(ctx.request.body)

    const { username, password } = ctx.request.body
    if (username === 'ycj' && password === '123'){
        // 设置sessionId
        // ctx.session.user = {
        //     username:'ycj'
        // }

        // 设置token
        const token = JWT.generate({
            id: '1111',
            username: 'ycj'
        }, '1d')
        // token返回在header
        ctx.set('Authorization',token)
        
        
        ctx.body = {
            ok:1
        }
    }else{
        ctx.body = {
            ok:0
        }
    }
})

//上传接口
router.post('/upload',upload.single('avatar'), async (ctx,next)=>{
    console.log(ctx.request.body,ctx.file)

    const { 
        username,
        password,
        age,
    } = ctx.request.body
    var avatar = ctx.file ? `/uploads/${ctx.file.filename}` :``
    // 利用Use模型进行存储操作 UserModel.create
    await UserModel.create({
        username,
        password,
        age,
        avatar
    })

    ctx.body = {
        ok:1
    }
})

module.exports = router