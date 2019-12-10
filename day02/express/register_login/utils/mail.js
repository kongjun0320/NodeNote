const nodemailer = require("nodemailer");

function sendMail(mail, code) {
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true,
    auth: {
      user: "1741142595@qq.com",
      pass: "qjieyazktnmgceha"
    }
  });
  let options = {
    from: '1741142595@qq.com',
    to: mail,
    subject: "来自星星的信息",
    text: `您的验证码是${code}` // plain text body   text和html这两个信息只能有一个
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, data) => {
      // 错误的时候 err:null
      if (err) {
        console.log(err)
        reject('发送失败')
      } else {
        resolve('发送成功')
      }
    });
  })

}

module.exports = { sendMail }



