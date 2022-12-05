const nodemailer = require("nodemailer");
const createSubject = require('./getSubject')
const createHtml = require('./getHtml')

module.exports.sendMail = async function (token, template) {

  const data = {
    from: '"Fred Foo 👻" <developer@alkas.gr>', // sender address
    to: "test@alkas.gr", // list of receivers
    subject: createSubject(template), // Subject line
    html: createHtml(token, template)
  }

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS, 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(data);

  console.log("Message sent: %s", info.messageId);

}

