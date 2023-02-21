var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 判断cookie里面有没有username
  res.render('index', { title: 'Express' });
});

module.exports = router;
