const express = require("express");
const router = express.Router();
const categoryController = require("../Controller/categoryController");

router.route("/").post(categoryController.createCategory);

module.exports = router;
