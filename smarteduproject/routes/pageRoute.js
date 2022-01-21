const express = require("express");
const router = express.Router();
const PageController = require("../Controller/PageController");
const redirectmiddleware = require("../middleware/redirectmiddleware")

router.route("/").get(PageController.getIndexPage);
router.route("/about").get(PageController.getAboutPage);
router.route("/register").get(redirectmiddleware,PageController.getRegisterPage);
router.route("/login").get(redirectmiddleware,PageController.getLoginPage);

module.exports = router;
