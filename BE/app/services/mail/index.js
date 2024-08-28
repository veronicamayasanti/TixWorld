import nodemailer from 'nodemailer';
import Mustache from 'mustache';
import {gmail, password} from '../../config.js';
import fs from 'fs';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: gmail,
        pass: password
    }
});

const otpMail = async (email, data) => {
    try {
        let template = fs.readFileSync('app/views/email/otp.html', 'utf8');
        let message = {
            from : gmail,
            to : email,
            subject : 'TixWorld OTP',
            html : Mustache.render(template, data)
        };

        return await transporter.sendMail(message);
    } catch (ex) {
        console.log(ex);
    }
    };

    export default otpMail