var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // cookie
  console.log(req.cookies)
  // 设置前端的cookie值
  res.cookie('gender','male')
  res.send({name:'ycj'});
});

module.exports = router;
