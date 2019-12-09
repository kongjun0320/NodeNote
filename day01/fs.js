const fs = require('fs')

fs.writeFile('./a.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1778095029,1922960566&fm=26&gp=0.jpg', 'binary', (err, data) => {
  console.log(err)
});