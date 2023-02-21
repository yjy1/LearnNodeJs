var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/user/add',(req,res)=>{
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

module.exports = router;
