var express = require('express');
var router = express.Router();
const JWT = require('../util/JWT')
/* GET home page. */
router.get('/', function (req, res, next) {
  // 判断 req.session.user

  res.render('index', { title: 'Express' });

});

/* 测试token的加密与验证过程 *//* 
const jwt = require('jsonwebtoken')
var token = jwt.sign({
  data: 'ycj'
}, 'anydata', { expiresIn: '10s' })
console.log(token)

var decoded = jwt.verify(token, 'anydata')
console.log(decoded)

setTimeout(() => {
  var decoded = jwt.verify(token, 'anydata')
  console.log(decoded)
}, 9000);

setTimeout(() => {
  var decoded = jwt.verify(token, 'anydata')
  console.log(decoded)
}, 11000); */

var token = JWT.generate({ name: 'ycj' }, "10s")

setTimeout(() => {
  console.log(JWT.verify(token))
}, 9000);

setTimeout(() => {
  console.log(JWT.verify(token))
}, 11000);

module.exports = router;
