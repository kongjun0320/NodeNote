const express = require('express')
const path = require('path')

const app = express()

// app.use(express.static(path.join(__dirname, './dd')));
app.use('/public',express.static(path.join(__dirname, './dd')));

app.listen(5000,()=>{
  console.log('running ... 5000')
})