const express = require("express");
const router = express.Router();
const CategoryController = require("../../controllers/backend/CategoryController");

const prefix = '/categories';
router.get(`${prefix}`, CategoryController.list);
router.get(`${prefix}/create`, CategoryController.create);
router.post(`${prefix}/store`, CategoryController.store);
router.get(`${prefix}/:id/show`, CategoryController.show);
router.get(`${prefix}/:id/edit`, CategoryController.edit);
router.post(`${prefix}/:id/update`, CategoryController.update);
router.delete(`${prefix}/destroy`, CategoryController.destroy);
router.delete(`${prefix}/delete`, CategoryController.delete);

module.exports = router;