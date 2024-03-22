const { default: mongoose } = require("mongoose");

const mongoDBURL = process.env.MONGO_DBURL;
const dbConnect = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose
            .connect(mongoDBURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("Kết nối MongoDB thành công");
            })
            .catch((err) => {
                console.error("Lỗi kết nối MongoDB:", err);
            });
    } catch (error) {
        console.log("Error:", error);
    }
};

module.exports = dbConnect;
