const express = require('express')
const multer = require('multer')
const app = express()

let storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'./uploads')
  },
  filename:(req,file,cb)=>{
    cb(null,'a.jpg')
  }
})
let upload = multer({storage})
app.post('/upload',upload.single('avator'),(req,res)=>[

])

app.listen(5000,(req,res) =>{
    console.log('running... 5000')
})