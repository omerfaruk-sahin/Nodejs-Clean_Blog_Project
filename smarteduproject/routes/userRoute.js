const express = require("express");
const router = express.Router();
const authController = require("../Controller/authController");
const authmiddleware = require("../middleware/authmiddleware")

router.route("/signup").post(authController.createUser);
router.route("/login").post(authController.loginUser);
router.route("/logout").get(authController.logoutUser);
router.route("/dashboard").get(authmiddleware,authController.getDashboardPage);


module.exports = router;
