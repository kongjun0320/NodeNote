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

router.post('/getInfoByType',(req,res)=>{
  let typeid = 1
  foodModel.find({typeid})
    .then(data=>{
      if(data.length>0){
        res.send({
          status:0,
          list:data,
          msg:'查询成功'
        })
      }else{
        res.send({
          status:0,
          list:data,
          msg:'暂无数据'
        })
      }
    })
    .catch(err=>{
      res.send({
        status:0,
        list:null,
        msg:'查询失败'
      })
    })
})

module.exports = router