const router = require("express").Router();
const controllers = require("../controllers/project");

router.post("/", controllers.createProject);
router.get("/", controllers.getProjects);
router.get("/:pid", controllers.getProject);
router.put("/:pid", controllers.updateProject);
router.delete("/:pid", controllers.deleteProject);

module.exports = router;
