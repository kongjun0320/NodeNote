 const express = require('express')
 const router = express.Router()


 router.get('/add',(req,res)=>{
   res.send('add')
 })
 router.get('/del',(req,res)=>{
  res.send('del')
})

 module.exports = router