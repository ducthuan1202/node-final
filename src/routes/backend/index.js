const express = require("express");
const router = express.Router();
const DashboardController = require("../../controllers/backend/DashboardController");

// router.get('/', DashboardController.actionIndex);
router.get('/dashboard', DashboardController.actionDashboard);

module.exports = router;