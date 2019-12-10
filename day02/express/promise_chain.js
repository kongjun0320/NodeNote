const fs = require('fs')

function isExit(){
  return new Promise((resolve,reject)=>{
    fs.stat('./a.txt',(err,stat)=>{
      if(err){
        reject('文件不存在')
      }else{
        resolve('文件存在')
      }
    })
  })
}

function delFile(){
  return new Promise((resolve,reject)=>{
    fs.unlink('./a.txt',(err)=>{
      if(err){
        reject('删除文件失败')
      }else{
        resolve('删除文件成功')
      }
    })
  })
}
/**
 * 一个promise链式调用中  只要有一个catch就可以了
 */
isExit()
  .then(msg=>{
    console.log('文件存在===then')
    return delFile()
  })
  .then(msg=>{
    console.log('文件删除成功===then')
  })
  .catch(errMsg=>{
    console.log('文件不存在的===catch')
  })
