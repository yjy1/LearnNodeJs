var express = require('express');
const UserController = require('../controllers/UserController');
const UserModel = require('../model/UserModel');
var router = express.Router();
  
router.get('/',function(req,res,next){
  res.render('login', { title: 'Express' })
}) 

module.exports = router;
