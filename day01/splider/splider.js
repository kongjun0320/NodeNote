/**
 * 制作简易爬虫
 * 1、获取目标网站
 * 2、分析网站内容 cheerio 使用这个第三方模块 可以使用jQuery里面的各种选择器
 * 3、获取有效信息
 */
const http = require('http')
const fs = require('fs')

let url = 'http://www.baidu.com/'

http.get(url, (res) => {

  const { statusCode } = res;
  const contentType = res.headers['content-type'];
  
  let rawData = '';
  res.on('data', (chunk) => {
    let tempChunk = ""
    tempChunk += chunk.toString()
    rawData += chunk;
  });
  res.on('end', () => {
    fs.writeFile('./index.html', rawData, (err) => {
      console.log(err)
    })
  });
  
}).on('error', (err) => {
  console.log(err)
})