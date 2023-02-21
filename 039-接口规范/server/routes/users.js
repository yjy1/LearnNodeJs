var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 响应前端的post请求-增加用户
router.post('/user',(req,res)=>{
  console.log(req.body)

  // 插入数据库
  // 1.创建一个模型（user,限制filed类型），一一对应数据库的集合（users）
  // user.create user.find user.delete

  const {username,password,age} = req.body
  UserModel.create({
    username,
    password,
    age
  }).then(data=>{
    console.log(data)
  })

  res.send({ ok: 1 })
})

router.put('/user/:id',(req,res)=>{
  console.log(req.body,req.params)
  const { username, password, age } = req.body
  UserModel.updateOne({ _id: req.params.id },{
    username
  }).then(data=>{
    console.log(data)
  })

  res.send({ ok: 1 })
})


router.delete('/user/:id',(req,res)=>{
  // console.log(req)

  UserModel.deleteOne({ _id: req.params.id }).then(data=>{
    console.log(data)
  })

  res.end({ ok: 1 })
})

router.get('/user',(req,res)=>{
  console.log(req.query)

  const {page,limit } = req.query

  UserModel.find({},['username','age']).sort({age:-1})
    .skip((page - 1) * limit).limit(limit)
  .then((data)=>{
    // console.log(data)
    res.send(data)
  })
})
module.exports = router;
