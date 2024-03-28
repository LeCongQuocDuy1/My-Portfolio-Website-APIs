const router = require("express").Router();
const controllers = require("../controllers/technology");

router.post("/", controllers.createTechnology);
router.get("/", controllers.getTechnologys);
router.get("/:pid", controllers.getTechnology);
router.put("/:pid", controllers.updateTechnology);
router.delete("/:pid", controllers.deleteTechnology);

module.exports = router;
