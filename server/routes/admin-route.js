const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");
router.post("/api/secret/admin", adminController.addAdmin);
router.get("/api/admin/details", adminController.getAdminDetails);
module.exports = router;
