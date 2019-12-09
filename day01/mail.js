const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "1741142595@qq.com", // generated ethereal user
    pass: "qjieyazktnmgceha"// generated ethereal password
  }
});

// send mail with defined transport object
let info =  transporter.sendMail({
  from: '1741142595@qq.com', // sender address
  to: "kjkongjun@163.com", // list of receivers
  subject: "title", // Subject line
  text: "xixixix", // plain text body   text和html这两个信息只能有一个
  html: "<b>Hello world?</b>" // html body
},()=>{

});

