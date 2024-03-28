const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res, next) => {
    const { username, email, phone, password, birthDate } = req.body;

    if (!username || !email || !phone || !password || !birthDate) {
        return res.status(400).json({
            status: false,
            message: "Missing inputs, please enter all information!",
        });
    }

    const user = await User.findOne({ email });
    if (user) {
        throw new Error(`User ${user.email} is existed!`);
    } else {
        const response = await User.create(req.body);
        return res.status(response ? 200 : 400).json({
            status: !!response,
            message: response
                ? "Register user account successfully!"
                : "Register user account failed!",
        });
    }
});

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({
            status: false,
            message: "Missing inputs, please enter all information!",
        });

    const user = await User.findOne({ email });
    if (user && user.isCorrectPassword(password)) {
        const { password, ...userData } = user.toObject(); // ép kiểu object
        return res.status(user ? 200 : 400).json({
            status: !!user,
            message: user
                ? "Login successfully! Welcome to MY-CV"
                : "Login failed!",
            response: user ? userData : undefined,
        });
    } else {
        throw new Error(`Email or password incorrect! Try again`);
    }
});

module.exports = { register, login };
