const nodemailer = require("nodemailer");

module.exports.sendMail = async function (token) {

  // create reusable transporter object using the default SMTP transport

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
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <developer@alkas.gr>', // sender address
    to: "test@alkas.gr", // list of receivers
    subject: "Welcome to Wdpt10 social app ✔", // Subject line
    text: "Welcome to Wdpt10 social app", // plain text body
    html: `<b>Welcome to our App</b>
        <p> Please click <a href='http://localhost:3000/emailconfirm/${token}'>here</a> to verify your email</p>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);

}

