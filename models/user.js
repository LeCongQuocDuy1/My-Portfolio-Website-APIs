const mongoose = require("mongoose"); // Erase if already required

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

//Export the model
module.exports = mongoose.model("User", userSchema);
