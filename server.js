const express = require("express");
require("dotenv").config();
// const dbConnect = require("./config/dbConnect");
const cookieParser = require("cookie-parser");
// const initRoutes = require("./routes/");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9999;

app.use(
    cors({
        origin: process.env.URL_CLIENT,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(express.json()); // đọc hiểu dữ liệu json
app.use(express.urlencoded({ extended: true })); // đọc và sử dụng dữ liệu x-www-form-urlencoded
app.use(cookieParser()); // đọc và sử dụng thông tin trong cookie

// dbConnect();
// initRoutes(app);

app.use("/", (req, res) => {
    res.send("SERVER ON");
});

app.listen(port, () => {
    console.log("Server running on the port " + port);
});
