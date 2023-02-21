var express = require('express');
const UserController = require('../controllers/UserController');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 响应前端的post请求-增加用户
router.post('/user',UserController.addUser)
// 动态路由，获取id-更新用户
router.put('/user/:id',UserController.updateUser)

// 删除用户
router.delete('/user/:id',UserController.deleteUser)
// 获取用户
router.get('/user',UserController.getUser)
module.exports = router;
