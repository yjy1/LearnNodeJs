const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // res.write('hello world')
    // res.end()
    // res.send('hello world')
    // res.send(`
    //     <html>
    //         <h1>hello world</h1>
    //     </html>
    // `)

    res.send({
        name: 'ycj',
        age: 26
    })
})

app.get('/login', (req, res) => {
    res.write('login')
    res.end()
})

// 匹配 acd 和 abcd
// app.get('/ab?cd', function (req, res) {
//     res.send("ok")
// });

// get http://aa.com/detail/2222
// app.get('/ab/:id/:id2', function (req, res) {
//     res.send("ok")
// });

// 匹配 abcd、abbcd、abbbcd等
// app.get('/ab+cd',function(req,res) {
//     res.send('ab+cd');
// });

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
// app.get('/ab*cd', function (req, res) {
//     res.send('ab*cd');
// })

// 匹配 /abe 和 /abcde
// app.get('/ab(cd)?e', function (req, res) {
//     res.send('ab(cd)?e');
// });

// app.get(/.*fly$/,function(req,res) {
//     res.send('/.*fly$/');
// });


const func1 = (req, res,next) => {
    // 验证用户token过期，cookie过期
    console.log('验证token')
    const isValid = false
    if(isValid){
        res.ycj = '这是func1计算的结果'
        next()
    }else{
        // 返回错误
        res.send('error')
    }
}
const func2 = (req, res) => {
    // 查询数据库
    // 返回内容
    console.log(res.ycj)
    res.send({ list: [1, 2, 3] })
}
app.get('/home',[func1,func2])
app.get('/list',[func1],(req, res) => {
    // 查询数据库
    // 返回内容
    res.send('list')
})

app.listen(3000, () => {
    console.log('server start')
})