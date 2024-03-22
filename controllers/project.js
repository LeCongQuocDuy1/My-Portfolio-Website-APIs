const Project = require("../models/project");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const createProject = asyncHandler(async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        throw new Error("Missing inputs");
    }

    if (req.body && req.body.title) {
        req.body.slug = slugify(req.body.title, "-");
    }

    const response = await Project.create(req.body);
    return res.status(response ? 200 : 400).json({
        status: !!response,
        message: response
            ? "Create a project successfully!"
            : "Create a project failed!",
        response: response ? response : undefined,
    });
});

const getProjects = asyncHandler(async (req, res, next) => {
    const response = await Project.find();
    if (!response) throw new Error("Project not found!");

    return res.status(response ? 200 : 400).json({
        status: !!response,
        response: response ? response : "Can not get all projects",
    });
});

const getProject = asyncHandler(async (req, res, next) => {
    const { pid } = req.params;
    const response = await Project.findById(pid);

    return res.status(response ? 200 : 400).json({
        status: !!response,
        response: response ? response : "Can not get project",
    });
});

const updateProject = asyncHandler(async (req, res, next) => {
    const { pid } = req.params;
    if (req.body && req.body.title) {
        req.body.slug = slugify(req.body.title, "-");
    }
    const response = await Project.findByIdAndUpdate(pid, req.body, {
        new: true,
    });

    return res.status(response ? 200 : 400).json({
        status: !!response,
        response: response ? response : "Can not update project",
    });
});

const deleteProject = asyncHandler(async (req, res, next) => {
    const { pid } = req.params;
    const response = await Project.findByIdAndDelete(pid);

    return res.status(response ? 200 : 400).json({
        status: !!response,
        response: response
            ? "Delete a project successfully"
            : "Can not delete project",
    });
});

module.exports = {
    createProject,
    getProject,
    getProjects,
    updateProject,
    deleteProject,
};
