const express = require('express')
const router = express.Router()
const foodModel = require('../db/model/foodModel')

router.post('/add', (req, res) => {
  let { name, price, desc, typename, typeid, img } = req.body

  foodModel.findOne({ name })
    .then(data => {
      if (data) {
        res.send({
          status: -1,
          msg: '菜名不能重复'
        })
      } else {
        return foodModel.insertMany({ name, price, desc, typename, typeid, img })
      }
    })
    .then(data => {
      res.send({
        status: 0,
        msg: '添加成功'
      })
    })
    .catch(err => {
      res.send({
        status: -1,
        msg: '添加失败'
      })
    })
})

router.post('/getInfoByType', (req, res) => {
  let { typeid } = req.body
  foodModel.find({ typeid })
    .then(data => {
      if (data.length > 0) {
        res.send({
          status: 0,
          list: data,
          msg: '查询成功'
        })
      } else {
        res.send({
          status: 0,
          list: data,
          msg: '暂无数据'
        })
      }
    })
    .catch(err => {
      res.send({
        status: 0,
        list: null,
        msg: '查询失败'
      })
    })
})

router.post('/getInfoByKW', (req, res) => {
  let { kw } = req.body
  let reg = new RegExp(kw)
  // $or $and
  //  foodModel.find({$or:[{name:{$regex:reg}},{desc:{$regex:reg}}]})
  foodModel.find({ name: { $regex: reg } })
    .then(data => {
      if (data.length > 0) {
        res.send({
          status: 0,
          list: data,
          msg: '查询成功'
        })
      } else {
        res.send({
          status: 0,
          list: data,
          msg: '查询数据为空'
        })
      }
    })
    .catch(err => {
      res.send({
        status: -1,
        msg: '查询失败'
      })
    })
})

router.post('/delete', (req, res) => {
  let { _id } = req.body
  // 批量删除 {_id:[id1,id2]}
  foodModel.findByIdAndRemove({ _id })
    .then(data => {
      res.send({
        status: 0,
        msg: '删除成功'
      })
    })
    .catch(err => {
      res.send({
        status: -1,
        msg: '删除失败'
      })
    })
})

router.post('/update', (req, res) => {
  //要注意对入参做空处理
  let { name, price, desc, typename, typeid, img, _id } = req.body
  foodModel.findByIdAndUpdate({ _id }, { name, price, desc, typename, typeid, img })
    .then(data => {
      res.send({
        status: 0,
        msg: '修改成功'
      })
    })
    .catch(err => {
      res.send({
        status: 0,
        msg: '修改失败'
      })
    })
})

router.post('/getInfoByPage', (req, res) => {
  let pageSize = req.body.pageSize || 2
  let pageIndex = req.body.pageIndex || 1
  foodModel.find().limit(Number(pageSize)).skip(Number(pageIndex-1)*pageSize)
    .then(data=>{
      console.log(data)
      res.send({
        status:0,
        list:data,
        msg:'查询成功'
      })
    }).catch(err=>{
      console.log(err)
      res.send({
        status:0,
        msg:'查询失败'
      })
    })
})

module.exports = router