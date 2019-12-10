const fs = require('fs')

function isExit() {
  return new Promise((resolve, reject) => {
    fs.stat('./a.txt', (err, stat) => {
      if (err) {
        reject('文件不存在')
      } else {
        resolve('文件存在')
      }
    })
  })
}

function delFile() {
  return new Promise((resolve, reject) => {
    fs.unlink('./a.txt', (err) => {
      if (err) {
        reject('删除文件失败')
      } else {
        resolve('删除文件成功')
      }
    })
  })
}
/**
 * 在promise链式调用中 如果在.then中没有返回promise对象 后续的.then() 还是会执行的
 * 这时我们就需要手动终止链式调用 使用 throw new Error()抛出一个错误对象 程序就跳转到catch中
 * 不会往下执行
 */
isExit()
  .then(msg => {
    console.log('文件存在===then')
    return delFile()
  })
  .then(msg => {
    console.log('文件删除成功===then')
    throw new Error('手动终止')
  })
  .then(msg => {
    console.log('tes1')
  })
  .then(msg => {
    console.log('test1')
  })
  .catch(errMsg => {
    console.log('文件不存在的===catch')
  })
