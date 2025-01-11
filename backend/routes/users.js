const express = require("express");
const router = express.Router();
const {
  getUserById,
  getUsers,
  createUser,
  updateUser,
  desactivateUser,
  getUsersTrash,
  activateUser,
} = require("../controllers/user");


router.get("/", [], getUsers);
router.get("/trash", [], getUsersTrash);
router.get("/:id", [], getUserById);
router.post("/create", [], createUser);
router.put("/update/:id", [], updateUser);
router.put("/delete/:id", [], desactivateUser);
router.put("/activate/:id", [], activateUser);

module.exports = router;
