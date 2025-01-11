const express = require("express");
const router = express.Router();
const {
  getConfigs,
  getConfigById,
  createConfig,
  updateConfig,
  deleteConfig,
} = require("../controllers/config");

router.get("/", [], getConfigs);
router.get("/:id", [], getConfigById);
router.post("/", [], createConfig);
router.put("/:id", [], updateConfig);
router.delete("/:id", [], deleteConfig);
module.exports = router;
