const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res, next) => {
    const { username, email, phone, password, birthDate } = req.body;

    if (!username || !email || !phone || !password || !birthDate)
        return res.status(400).json({
            status: false,
            message: "Missing inputs, please enter all information!",
        });

    const response = await User.create(req.body);
    return res.status(400).json({
        status: !!response,
        message: "Register user account successfully!",
    });
});

module.exports = { register };
