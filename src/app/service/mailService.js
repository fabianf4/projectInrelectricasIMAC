var nodemailer = require('nodemailer')
//-----------------------------------------------------------------------------
export async function sendMail(otpText) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW
    }
  })

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL_TO,
    subject: process.env.NODEMAILER_SUBJECT,
    html: otpText
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email Sent')
      return true
    }
  })
}
