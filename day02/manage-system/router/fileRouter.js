const express = require('express')
const router = express.Router()
const multer = require('multer')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../static/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.jpg')
  }
})
 
let upload = multer({ storage: storage })

router.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file)
  res.send('hhe')
})


module.exports = router