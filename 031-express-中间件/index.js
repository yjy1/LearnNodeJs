const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({
        name: 'ycj',
        age: 26
    })
})

app.get('/login', (req, res) => {
    res.write('login')
    res.end()
})

const func1 = (req, res,next) => {
    // 验证用户token过期，cookie过期
    console.log('验证token')
    const isValid = true
    if(isValid){
        res.ycj = '这是func1计算的结果'
        next()
    }else{
        // 返回错误
        res.send('error')
    }
}

app.use(func1)
// app.use('/home',func1)

const func2 = (req, res) => {
    // 查询数据库
    // 返回内容
    console.log(res.ycj)
    res.send({ list: [1, 2, 3] })
}
app.get('/home',[func2])
app.get('/list',(req, res) => {
    // 查询数据库
    // 返回内容
    res.send('list')
})

app.listen(3001, () => {
    console.log('server start')
})