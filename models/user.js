const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");

// Object.freeze - đảm bảo các giá trị không thay đổi
const RoleEnum = Object.freeze({
    ADMIN: "admin",
    USER: "user",
});

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default:
            "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: Object.values(RoleEnum),
        default: RoleEnum.USER,
    },
});

userSchema.pre("save", function (next) {
    // Khi password cũ ko có thay đổi gì thì không cần phải hash lại làm gì
    if (this.isModified("password")) {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }
    next();
});

userSchema.methods = {
    isCorrectPassword: function (password) {
        return bcrypt.compareSync(password, this.password);
    },
};

//Export the model
module.exports = mongoose.model("User", userSchema);
