const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.HOST_NAME,
    auth:{
        user:process.env.HOST_EMAIL,
        pass:process.env.HOST_PASS
    }
});

module.exports = transporter;