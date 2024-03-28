const authRoute = require("./auth");
const projectRoute = require("./project");
const userRoute = require("./user");
const technologyRoute = require("./technology");
const { errorHandler, notFound } = require("../middlewares/errorHandler");

const initRoutes = (app) => {
    app.use("/api/v1/auth", authRoute);
    app.use("/api/v1/project", projectRoute);
    app.use("/api/v1/user", userRoute);
    app.use("/api/v1/technology", technologyRoute);

    app.use(notFound);
    app.use(errorHandler);
};

module.exports = initRoutes;
