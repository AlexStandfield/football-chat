const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})
const {email} = req.body
let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Welcome to Locker Room Chat!',
    text: 'Thank you for registering with us!'
}
transporter.sendMail(mailOptions)
    .then(response => {
        console.log('Email Has Been Sent')
    })
    .catch(err => {
        console.log('Email Failed to Send', err)
    })