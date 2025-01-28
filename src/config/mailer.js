

import nodemailer from 'nodemailer';

const email = 'mailer@thegreenparksapanca.com';
const pass = 'verder123';

export const transporter = nodemailer.createTransport({
    host: 'smail06.doruk.net.tr',
    port: 587,
    auth: {
        user: email,
        pass: pass
    }
});

