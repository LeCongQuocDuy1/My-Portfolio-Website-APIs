const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var technologySchema = new mongoose.Schema(
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
        thumbnail: {
            type: String,
            default:
                "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081",
        },
    },
    {
        timestamps: true,
    }
);

//Export the model
module.exports = mongoose.model("Technology", technologySchema);
