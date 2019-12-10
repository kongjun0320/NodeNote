const mongoose = require('mongoose');

// 连接数据库 test表示连接数据库的名字
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', () => {
  console.log('数据库连接失败')
});
db.once('open', () => {
  console.log('数据库连接成功')
});