var express = require('express');
var router = express.Router();
const JWT = require('../util/JWT')
/* GET home page. */
router.get('/', function (req, res, next) {
  // 判断 req.session.user

  res.render('upload', { title: 'Express' });

});

module.exports = router