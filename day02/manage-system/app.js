const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
// 使用静态资源
app.use('/public',express.static(path.join(__dirname, './static')));
//  post的body参数的处理
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 连接数据库
const db = require('./db')
// 引入路由
const foodRouter = require('./router/foodRouter') 
app.use('/food', foodRouter)



app.listen(5000, () => {
  console.log('running ... 5000')
})