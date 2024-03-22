const authRoute = require("./auth");
const { errorHandler, notFound } = require("../middlewares/errorHandler");

const initRoutes = (app) => {
    app.use("/api/v1/auth", authRoute);

    app.use(notFound);
    app.use(errorHandler);
};

module.exports = initRoutes;
