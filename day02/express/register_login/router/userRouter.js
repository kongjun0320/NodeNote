const express = require('express')
const router = express.Router()
const { sendMail } = require('../utils/mail')
// 用户的数据模型
const User = require('../db/model/userModel')
// 注册
router.post('/register', (req, res) => {
  let { username, password, age, gender } = req.body

  if (!username || !password) {
    res.send({
      status: -1,
      msg: '用户名或者密码不能为空'
    })
  } else {
    // 判断用户名有没有重复
    User.findOne({ username })
      .then(data => {
        if (data) {
          res.send({
            status: -1,
            msg: '用户名已存在'
          })
        } else {
          return User.insertMany({  //新增   返回一个promise
            username, password, age, gender
          })
        }
      })
      .then(data => {
        res.send({
          status: 0,
          msg: '注册成功'
        })
        console.log(data)
      })
      .catch(err => {
        console.log(err)
        res.send({
          status: -2,
          msg: '异常错误'
        })
      })
  }
})
// 登录
router.post('/login', (req, res) => {
  let { username, password } = req.body
  if (!username || !password) {
    res.send({
      status: 0,
      meg: '请输入用户名或者密码'
    })
  } else {
    User.find({ username, password })
      .then(data => {
        if (data.length > 0) {
          res.send({
            status: 0,
            meg: '登录成功'
          })
        } else {
          res.send({
            status: -1,
            meg: '用户名或者密码错误'
          })
        }
      })
      .catch(err => {
        res.send({
          status: -2,
          meg: '异常错误'
        })
      })
    // User.findOne({ username })
    //   .then(data => {
    //     let userData = data
    //     if(data.username == username && data.password == password){
    //       res.send({
    //         status: 0,
    //         meg: '登录成功'
    //       })
    //     }else{
    //       res.send({
    //         status: -1,
    //         meg: '用户名或者密码错误'
    //       })
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     res.send({
    //       status: -1,
    //       meg: '用户名或者密码错误'
    //     })
    //   })
  }
})
// 验证码
router.post('/verify', (req, res) => {
  let { mail } = req.body
  sendMail(mail, '2019')
    .then(data => {
      res.send({
        status:0,
        msg:'发送验证码成功'
      })
      console.log(data)
    })
    .catch(err => {
      res.send({
        status:0,
        msg:'发送验证码失败'
      })
      console.log(err)
    })
})

module.exports = router