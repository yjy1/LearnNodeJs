const UserModel = require("../model/UserModel")

const UserService = {
    addUser: (username,password,age) => {
        UserModel.create({
            username,
            password,
            age
        }).then(data => {
            console.log(data)
        })
    },
    updateUser: (req,username, password, age)=>{
        UserModel.updateOne({ _id: req.params.id }, {
            username
        }).then(data => {
            console.log(data)
        })
    },
    deleteUser:(req)=>{
        UserModel.deleteOne({ _id: req.params.id }).then(data => {
            console.log(data)
        })
    },
    getUser:(page,limit )=>{
      return  UserModel.find({},['username','age']).sort({age:-1})
          .skip((page - 1) * limit).limit(limit)
    },
    checkUser:(username,password)=>{
        return UserModel.find({ username: username, password: password })
    }
}

module.exports = UserService