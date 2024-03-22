const authRoute = require("./auth");

const initRoutes = (app) => {
    app.use("/api/v1/auth", authRoute);
};

module.exports = initRoutes;
