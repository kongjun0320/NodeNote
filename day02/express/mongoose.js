const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', () => {
  console.log('数据库连接失败')
});
db.once('open', () => {
  console.log('数据库连接成功')
});

// 创建schema对象
let userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  passowrd: { type: String, require: true },
  age: Number,
  gender: { type: Number, default: 0 }
})
// 将schema对象转换成数据模型
let User = mongoose.model('user', userSchema)
// 通过schema对象可以针对数据集合做增删改查
// 增加
// User.insertMany({
//   username: 'kongjun',
//   passowrd: '0320',
//   age: 21
// })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log('插入失败')
//   })
// 查询
// User.find({_id:'5deef36f2e31be34081e30a6'})
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {

//   })
// 删除
// User.deleteOne({_id:'5deef577d7e9a1254488887e'})
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {

//   })
// 更新
// User.updateOne({ _id: '5deef572326f69284cb8f7fd' }, { age: 19 })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(
//       err
//     )
//   })