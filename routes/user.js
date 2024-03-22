const router = require("express").Router();
const controllers = require("../controllers/user");

router.post("/sendMail", controllers.sendEmail);

module.exports = router;
