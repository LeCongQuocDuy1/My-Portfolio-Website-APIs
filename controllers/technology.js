const Technology = require("../models/technology");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const createTechnology = asyncHandler(async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        throw new Error("Missing inputs");
    }

    if (req.body && req.body.title) {
        req.body.slug = slugify(req.body.title, "-");
    }

    const response = await Technology.create(req.body);
    return res.status(response ? 200 : 400).json({
        status: !!response,
        message: response
            ? "Create a technology successfully!"
            : "Create a technology failed!",
        response: response ? response : undefined,
    });
});

const getTechnologys = asyncHandler(async (req, res, next) => {
    const response = await Technology.find();
    if (!response) throw new Error("Technology not found!");

    return res.status(response ? 200 : 400).json({
        status: !!response,
        response: response ? response : "Can not get all technologys",
    });
});

const getTechnology = asyncHandler(async (req, res, next) => {
    const { pid } = req.params;
    const response = await Technology.findById(pid);

    return res.status(response ? 200 : 400).json({
        status: !!response,
        response: response ? response : "Can not get technology",
    });
});

const updateTechnology = asyncHandler(async (req, res, next) => {
    const { pid } = req.params;
    if (req.body && req.body.title) {
        req.body.slug = slugify(req.body.title, "-");
    }
    const response = await Technology.findByIdAndUpdate(pid, req.body, {
        new: true,
    });

    return res.status(response ? 200 : 400).json({
        status: !!response,
        response: response ? response : "Can not update technology",
    });
});

const deleteTechnology = asyncHandler(async (req, res, next) => {
    const { pid } = req.params;
    const response = await Technology.findByIdAndDelete(pid);

    return res.status(response ? 200 : 400).json({
        status: !!response,
        response: response
            ? "Delete a technology successfully"
            : "Can not delete technology",
    });
});

module.exports = {
    createTechnology,
    getTechnology,
    getTechnologys,
    updateTechnology,
    deleteTechnology,
};
