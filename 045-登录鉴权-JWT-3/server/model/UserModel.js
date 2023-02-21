const mongoose = require('mongoose')

const UserType = {
    username:String,
    password:String,
    age:Number,
}

const UserModel = mongoose.model("user",new mongoose.Schema(UserType))
// 模型user将会对应users集合
module.exports = UserModel