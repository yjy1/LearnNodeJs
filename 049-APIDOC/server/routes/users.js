var express = require('express');
const UserController = require('../controllers/UserController');
const UserModel = require('../model/UserModel');
var router = express.Router();


const multer = require('multer')
const upload = multer({dest:'public/uploads/'})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * 
 * @api {post} /api/user 增加用户
 * @apiName addUser
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 * @apiParam  {Number} age 年龄
 * @apiParam  {File} avatar 头像
 * 
 * @apiSuccess (200) {number} ok 标识成功字段
 * 
 * @apiParamExample  {multipart/form-data} Request-Example:
 * {
 *     username : 'ycj',
 *     password : '123',
 *     age : 26,
 *     avatar : File对象,
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     ok : 1
 * }
 * 
 * 
 */
// 响应前端的post请求-增加用户
router.post('/user',upload.single('avatar'), UserController.addUser)
// 动态路由，获取id-更新用户
router.put('/user/:id',UserController.updateUser)


/**
 * 
 * @api {delete} /api/user/:id 删除用户
 * @apiName deleteUser
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * 
 
 * @apiSuccess (200) {number} ok 标识成功字段
 * 
 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     ok : 1
 * }
 * 
 * 
 */
// 删除用户
router.delete('/user/:id',UserController.deleteUser)
// 获取用户
router.get('/user',UserController.getUser)
// 校验登录用户
router.post('/login',UserController.checkUser)

router.get('/logout',UserController.logout)

module.exports = router;
