const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
        },
        technology: {
            type: mongoose.Types.ObjectId,
            ref: "Technology",
        },
        thumbnail: {
            type: String,
            default:
                "https://scotturb.com/wp-content/uploads/2016/11/product-placeholder.jpg",
        },
    },
    {
        timestamps: true,
    }
);

//Export the model
module.exports = mongoose.model("Project", projectSchema);
