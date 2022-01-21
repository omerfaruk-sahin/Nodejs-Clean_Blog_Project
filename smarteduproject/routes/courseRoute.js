const express = require("express");
const router = express.Router();
const courseController = require("../Controller/courseController");
const roleMiddleware = require("../middleware/roleMiddleware")

router.route("/").post(roleMiddleware(["teacher", "admin"]),courseController.createCourse);
router.route("/").get(courseController.getAllCourse);
router.route("/:slug").get(courseController.getCourse)

module.exports = router;
