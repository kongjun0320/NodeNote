const mongoose = require('mongoose')
// 创建schema对象
let userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  age: {type:Number},
  gender: { type: Number, default: 0 }
})
// 将schema对象转换成数据模型
let User = mongoose.model('user', userSchema)

module.exports = User