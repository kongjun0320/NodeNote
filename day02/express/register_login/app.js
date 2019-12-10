const express = require('express')
const bodyParser = require('body-parser')

const app = express()
//  post的body参数的处理
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 连接数据库
const db = require('./db/connect')
// 引入路由
const userRouter = require('./router/userRouter')
app.use('/user', userRouter)



app.listen(5000, () => {
  console.log('running ... 5000')
})