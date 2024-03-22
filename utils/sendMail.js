const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendMailFunc = (name, email, description) => {
    // Thiết lập transporter cho nodemailer (cần cấu hình email gửi)
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_NAME,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

    // Định nghĩa options cho email
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_NAME,
        subject: "New email from MY-CV",
        text: `Name: ${name}\nEmail: ${email}\nContent: ${description}`,
        html: `<h1>Hello Le Cong Quoc Duy</h1>\n<p>I'm ${name} email cua toi la ${email}. I'm from to your website my-cv!</p>\n<p>I'm have to you something: ${description}</p>`,
    };

    // Gửi email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Email sent: " + info.response);
            resolve();
        }
    });
};

module.exports = { sendMailFunc };
