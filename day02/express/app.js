const app = require('express')()
const bodyParser = require('body-parser')

const userRouter = require('./router/user')

// 全局中间件
app.use('/',(req,res,next)=>{
  console.log(req.query.token)
  let {token} = req.query
  if(token){
    next()
  }else{
    res.send('缺少中间件')
  }
})

// 处理post请求参数
// parse application/x-www-form-urlencoded  普通表单的数据格式
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json   json的数据格式    
// app.use(bodyParser.json())
 
app.use('/user', userRouter)

app.listen(5000, () => {
  console.log('server is running 5000')
})