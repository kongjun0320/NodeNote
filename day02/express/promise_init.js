const fs = require('fs')

function delFile() {
  return new Promise((resolve, reject) => {
    // 里面写异步的方法
    fs.unlink('./aa.txt', err => {
      if (err) {
        reject('删除文件失败')
      } else {
        resolve('删除文件成功')
      }
    })
  })
}

delFile()
  .then(msg => {
    console.log(msg)
  })
  .catch(errMsg => {
    console.log(errMsg)
  })
