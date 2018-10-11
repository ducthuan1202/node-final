const express = require("express");
const router = express.Router();
const PageController = require("../../controllers/frontend/PageController");

router.get('/', PageController.actionIndex);

module.exports = router;