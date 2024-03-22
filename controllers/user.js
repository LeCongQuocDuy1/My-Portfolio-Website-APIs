const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const { sendMailFunc } = require("../utils/sendMail");

const sendEmail = asyncHandler(async (req, res, next) => {
    const { name, email, description } = req.body;

    if (!name || !email || !description) {
        throw new Error("Missing inputs!");
    }

    sendMailFunc(name, email, description);
    return res.status(200).json({
        message: "Sent mail",
    });
});

module.exports = { sendEmail };
